import { Injectable } from '@nestjs/common';
import { enviar_Email } from './methods/sendEmail.function';
import { activar_Cuenta } from './methods/validateAccount.function';
import { actualizar_Contraseña } from './methods/password.function';

@Injectable()
export class ClientService {

  async validar_cuenta(Destinatario: any) {
    let validacion: any = await activar_Cuenta(Destinatario);
    let template_email = validacion.template_email;
    await enviar_Email(Destinatario, template_email);
    return {
      status: true,
      codigo: validacion.numero_Activacion
    };
  }

  async actualizar_contraseña(Destinatario: any) {
    let actualizacion: any = await actualizar_Contraseña(Destinatario);
    let template_email = actualizacion.template_email;
    await enviar_Email(Destinatario, template_email);
    return {
      status: true,
      codigo: actualizacion.numero_Activacion
    };
  }

}
