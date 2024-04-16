import { Injectable } from '@nestjs/common';
import { enviarEmail } from './methods/sendEmail.function';
import { activar_Cuenta } from './methods/validateAccount.function';

@Injectable()
export class ClientService {

  async validar_cuenta(Destinatario: any) {
    let validacion: any = await activar_Cuenta(Destinatario);
    let template_email = validacion.template_email;
    await enviarEmail(Destinatario, template_email);
    return {
      status: true,
      codigo: validacion.accountNumber
    };
  }

}
