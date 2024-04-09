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
     * Logs in an existing user.
     * @param loginDto Data of the user login.
     * @returns Information of the logged-in session.
     */

    async login(loginDto: LoginDto) {
      const { identificador, contraseña } = loginDto;
  
      const cuenta: any = await this.cuentasService.findOneByEmail(
        identificador,
      );
  
      if (!cuenta) {
        throw new UnauthorizedException(Errores_USUARIO.USUARIO_NOT_FOUND);
      }
  
      if (!(await bcrypt.compare(contraseña, cuenta.cuenta.contraseña))) {
        throw new UnauthorizedException(Errores_USUARIO.USUARIO_INVALID);
      }
  
      const payload = { identificador: cuenta.cuenta.identificador, role: cuenta.cuenta.rol };
  
      const access_token = await this.jwtService.signAsync(payload);
  
      return {
        access_token,
        identificador,
        role: cuenta.cuenta.rol,
        message: Exito_USUARIO.Sesion_Activa,
      };
    }

}
