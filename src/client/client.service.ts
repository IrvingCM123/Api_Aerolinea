import { Injectable } from '@nestjs/common';
import { enviarEmail } from './methods/sendEmail.function';
import { validateAccount } from './methods/validateAccount.function';

@Injectable()
export class ClientService {

  async validar_cuenta(Destinatario: any) {
    let validacion: any = await validateAccount(Destinatario);
    let template_email = validacion.template_email;
    await enviarEmail(Destinatario, template_email);
    return {
      status: true,
      codigo: validacion.accountNumber
    };
  }

}
