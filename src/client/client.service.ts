import { Injectable } from '@nestjs/common';
import { enviarEmail } from './methods/sendEmail.function';
import { validateAccount } from './methods/validateAccount.function';

@Injectable()
export class ClientService {

  async validar_cuenta(Data: any) {
    let Destinatario = Data.Destinatario;
    let template_email = await validateAccount(Destinatario);
    await enviarEmail(Destinatario, template_email);
  }

}
