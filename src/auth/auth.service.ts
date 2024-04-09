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

import { Exito_Cuentas, Errores_Cuentas } from 'src/common/enums/cuentas.enum';
import { Exito_USUARIO, Errores_USUARIO } from 'src/common/helpers/usuario.helpers';

@Injectable()
export class AuthService {

  constructor(
    private usuarioService: UsuarioService,
    private cuentasService: CuentasService,
    private jwtService: JwtService,
    private connection: Connection,
  ) {}

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
