import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { UsuarioService } from 'src/resource/usuario/usuario.service';
import { CuentasService } from 'src/resource/cuentas/cuentas.service';
import { Connection } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { Exito_Cuentas, Errores_Cuentas, Estado } from 'src/common/enums/cuentas.enum';
import { Exito_USUARIO, Errores_USUARIO } from 'src/common/helpers/usuario.helpers';
import { RegisterDto } from './dto/registro.dto';

@Injectable()
export class AuthService {

  constructor(
    private usuarioService: UsuarioService,
    private cuentasService: CuentasService,
    private jwtService: JwtService,
    private connection: Connection,
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
      usuario_Nombres,
      usuario_Apellidos,
      usuario_Edad,
      usuario_Telefono,
    } = registroDTO;

    // Verificar si ya existe un usuario con el mismo identificador
    const user = await this.cuentasService.findOneByEmail(identificador);

    if (user) {
      throw new BadRequestException(Errores_USUARIO.USUARIO_DUPLICATED);
    }

    // Hashear la contraseña antes de almacenarla en la base de datos
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Iniciar una transacción para garantizar la integridad de los datos
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Crear un nuevo usuario
      const usuario: any = await this.usuarioService.create({
        usuario_Nombres,
        usuario_Apellidos,
        usuario_Edad,
        usuario_Telefono,
      });

      // Crear una nueva cuenta asociada al usuario
      await this.cuentasService.create({
        identificador,
        contraseña: hashedPassword,
        rol,
        estado_cuenta: Estado.PENDIENTE,
        id_usuario: usuario.id_usuario,
      });

      // Confirmar la transacción si todo va bien
      await queryRunner.commitTransaction();

      return { usuario_Nombres, identificador, message: Exito_USUARIO.USUARIO_CREATED };
    } catch (error) {
      // Revertir la transacción si hay algún error
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(Errores_Cuentas.CUENTA_NOT_CREATED);
    } finally {
      // Liberar la conexión de la transacción
      await queryRunner.release();
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
    if (!cuenta) {
      throw new UnauthorizedException(Errores_USUARIO.USUARIO_NOT_FOUND);
    }

    // Verificar si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos
    if (!(await bcrypt.compare(contraseña, cuenta.cuenta.contraseña))) {
      throw new UnauthorizedException(Errores_USUARIO.USUARIO_INVALID);
    }

    // Crear el payload para el token JWT con el identificador y el rol de la cuenta
    const payload = { identificador: cuenta.cuenta.identificador, role: cuenta.cuenta.rol };

    // Firmar el token JWT con el payload
    const access_Token = await this.jwtService.signAsync(payload);

    // Devolver la información de la sesión iniciada
    return {
      access_Token,
      identificador,
      role: cuenta.cuenta.rol,
      message: Exito_USUARIO.Sesion_Activa,
    };
  }
}
