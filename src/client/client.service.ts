import { HttpCode, Injectable } from '@nestjs/common';
import { enviar_Email } from './methods/sendEmail.function';
import { activar_Cuenta } from './methods/validateAccount.function';
import { actualizar_Contraseña } from './methods/password.function';
import { CuentasService } from 'src/resource/cuentas/cuentas.service';

@Injectable()
export class ClientService {

  constructor(private cuentasService: CuentasService) { }

  async validar_cuenta(Destinatario: any) {
    let validacion: any = await activar_Cuenta(Destinatario);
    let template_email = validacion.template_email;
    await enviar_Email(Destinatario, template_email);
    return {
      status: 201,
      codigo: validacion.numero_Activacion
    };
  }

  async actualizar_contraseña(Destinatario: any) {
    let actualizacion: any;
    let template_email: any;

    actualizacion = await actualizar_Contraseña(Destinatario);

    template_email = actualizacion.template_email;
    await enviar_Email(Destinatario, template_email);

    await this.cuentasService.registrar_codigo(actualizacion.numero_Activacion, Destinatario);
  
    return {
      status: 201,
    };
  }

}
