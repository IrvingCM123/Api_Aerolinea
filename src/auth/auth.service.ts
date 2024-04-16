import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { UsuarioService } from 'src/resource/usuario/usuario.service';
import { CuentasService } from 'src/resource/cuentas/cuentas.service';
import { ClientService } from 'src/client/client.service';
import { Connection } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { Estado } from 'src/common/enums/cuentas.enum';
import { Exito_Cuentas, Errores_Cuentas } from 'src/common/helpers/cuentas.helpers';
import { Exito_USUARIO, Errores_USUARIO } from 'src/common/helpers/usuario.helpers';
import { RegisterDto } from './dto/registro.dto';
import { Usuario } from 'src/resource/usuario/entities/usuario.entity';
import { Cuenta } from 'src/resource/cuentas/entities/cuenta.entity';

import { TransaccionService } from 'src/common/transaction/transaccion.service';
import { Tipo_Transaccion } from 'src/common/enums/tipo_Transaccion.enum';

@Injectable()
export class AuthService {

  constructor(
    private cuentasService: CuentasService,
    private clientService: ClientService,
    private jwtService: JwtService,
    private transaccionService: TransaccionService,
  ) { }

  /**
   * Registra un nuevo usuario.
   * @param registroDTO Datos del usuario a registrar.
   * @returns Información del usuario registrado.
   */
  async register(registroDTO: RegisterDto) {
    const {
      identificador,
      contraseña,
      rol,
      usuario_Nombre,
      usuario_Apellidos,
      usuario_Edad,
      usuario_Telefono,
    } = registroDTO;

    // Verificar si ya existe un usuario con el mismo identificador
    const user = await this.cuentasService.findOneByEmail(identificador);

    if (user != false) {
      throw new BadRequestException(Errores_USUARIO.USUARIO_DUPLICATED);
    }

    // Hashear la contraseña antes de almacenarla en la base de datos
    const hashedPassword = await bcrypt.hash(contraseña, 10);

      const usuario_Data: any = {
      usuario_Nombre: usuario_Nombre,
      usuario_Apellidos: usuario_Apellidos,
      usuario_Edad: usuario_Edad,
      usuario_Telefono: usuario_Telefono
    }

    let nuevo_Usuario: any;

    try {

      // Guardar el nuevo usuario en la base de datos
      nuevo_Usuario = await this.transaccionService.transaction(Tipo_Transaccion.Guardar, Usuario, usuario_Data);
      if (nuevo_Usuario.mensaje == 'Error') {
        return {
          status: 400, // Código de estado de error
          message: Errores_USUARIO.USUARIO_NOT_CREATED // Mensaje de error personalizado
        };
      }

      // Enviar correo de confirmación para activar la cuenta registrada
      let enviar_email = await this.clientService.validar_cuenta(identificador);

      if (enviar_email.status != 201) {
        return {
          status: 400, // Código de estado de error
          message: Errores_Cuentas.CUENTA_NOT_CREATED // Mensaje de error personalizado
        };
      }

      // Hashear el numero de activacion antes de almacenarla en la base de datos
      const hashedActivacion = await bcrypt.hash(enviar_email.codigo, 10);

      // Crear una nueva cuenta asociada al usuario
      const cuenta = {
        identificador: identificador,
        contraseña: hashedPassword,
        rol: rol,
        estado_cuenta: Estado.PENDIENTE,
        id_usuario: nuevo_Usuario.resultado.id_usuario,
        numero_activacion: hashedActivacion
      }

      // Guardar la nueva cuenta en la base de datos
      let crearCuenta: any = await this.transaccionService.transaction(Tipo_Transaccion.Guardar,cuenta, Cuenta);
      if (crearCuenta.mensaje != 'Éxito') {
        await this.transaccionService.transaction(Tipo_Transaccion.Eliminar_Con_Parametros, Usuario,'', 'id_usuario', nuevo_Usuario.resultado.id_usuario  );
        return {
          status: 400, // Código de estado de error
          message: Errores_Cuentas.CUENTA_NOT_CREATED // Mensaje de error personalizado
        };
      }

      return { usuario_Nombre, identificador, message: Exito_USUARIO.USUARIO_CREATED };
    } catch (error) {
      return {
        status: 400, // Código de estado de error
        message: Errores_USUARIO.USUARIO_NOT_CREATED // Mensaje de error personalizado
      };
    }
  }

  /**
   * Inicia sesión para un usuario existente.
   * @param loginDto Datos del inicio de sesión del usuario.
   * @returns Información de la sesión iniciada.
   */
  async login(loginDto: LoginDto) {

    // Extraer identificador y contraseña del DTO de inicio de sesión
    const { identificador, contraseña } = loginDto;

    // Buscar la cuenta por el identificador (que puede ser un correo electrónico)
    const cuenta: any = await this.cuentasService.findOneByEmail(
      identificador,
    );

    // Si no se encuentra la cuenta, lanzar una excepción de no autorizado
    if (cuenta == null || cuenta == false) {
      throw new UnauthorizedException(Errores_USUARIO.USUARIO_NOT_FOUND);
    }

    // Verificar el estado de la cuenta para permitir el acceso
    let estadoCuenta = cuenta.cuenta.cuenta_Estado_Cuenta;

    //Permitir el acceso solo a cuentas activas y no bloqueadas
    if (estadoCuenta == Estado.PENDIENTE || estadoCuenta == Estado.INACTIVO) {
      throw new UnauthorizedException(Errores_Cuentas.CUENTA_INACTIVA);
    }

    if (estadoCuenta == Estado.BLOQUEADO) {
      throw new UnauthorizedException(Errores_Cuentas.CUENTA_BLOQUEADA);
    }

    if (estadoCuenta == Estado.ELIMINADO) {
      throw new UnauthorizedException(Errores_Cuentas.CUENTA_ELIMINADA);
    }
    // Verificar si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos
    if (!(await bcrypt.compare(contraseña, cuenta.cuenta.cuenta_Contraseña))) {
      throw new UnauthorizedException(Errores_USUARIO.PASSWORD_NOT_MATCH);
    }

    // Crear el payload para el token JWT con el identificador y el rol de la cuenta
    const payload = { identificador: cuenta.cuenta.cuenta_Identificador, role: cuenta.cuenta.cuenta_Rol };

    // Firmar el token JWT con el payload
    const access_Token = await this.jwtService.signAsync(payload);

    // Devolver la información de la sesión iniciada
    return {
      access_Token,
      identificador,
      role: cuenta.cuenta.cuenta_Rol,
      message: Exito_USUARIO.Sesion_Activa,
    };
  }
}
