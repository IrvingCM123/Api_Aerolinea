import { Injectable } from '@nestjs/common';
import { enviarEmail } from './methods/sendEmail.function';
import { validateAccount } from './methods/validateAccount.function';

@Injectable()
export class ClientService {

  async validar_cuenta(Datos: any) {
    let numeros_Validar = await validateAccount(Datos.usuario_Email);
    
  }

}
