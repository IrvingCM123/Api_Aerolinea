import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {

  
    /**
     * Logs in an existing user.
     * @param loginDto Data of the user login.
     * @returns Information of the logged-in session.
     */

    async login(loginDto: LoginDto) {
      const { identificador, contraseña } = loginDto;
  
      const cuenta: any = await this.cuentasService.findByEmailWithPassword(
        email,
      );
  
      if (!cuenta) {
        throw new UnauthorizedException(Errores_USUARIO.USUARIO_NOT_FOUND);
      }
  
      if (!(await bcrypt.compare(password, cuenta.cuenta.password))) {
        throw new UnauthorizedException(Errores_USUARIO.USUARIO_INVALID);
      }
  
      const payload = { email: cuenta.cuenta.email, role: cuenta.usuario.role };
  
      const access_token = await this.jwtService.signAsync(payload);
  
      return {
        access_token,
        email,
        role: cuenta.usuario.role,
        message: Exito_Usuarios.Sesion_Activa,
      };
    }

}
