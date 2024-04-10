import { Injectable } from '@nestjs/common';
import { enviarEmail } from './methods/sendEmail.function';
import { validateAccount } from './methods/validateAccount.function';

@Injectable()
export class ClientService {

  async validar_cuenta(Datos: any) {
    let template_email = await validateAccount(Datos.usuario_Email);
    let Data: any = {
      Destinatario: Datos.usuario_Email,
    };
    await enviarEmail(Data, template_email);
  }

}
