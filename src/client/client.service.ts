import { HttpCode, Injectable } from '@nestjs/common';
import { enviar_Email } from './methods/sendEmail.function';
import { activar_Cuenta } from './methods/validateAccount.function';
import { actualizar_Contraseña } from './methods/password.function';
import { CuentasService } from 'src/resource/cuentas/cuentas.service';
import { Errores_Cuentas, Exito_Cuentas } from 'src/common/helpers/cuentas.helpers';

import { TransaccionService } from 'src/common/transaction/transaccion.service';
import { Tipo_Transaccion } from 'src/common/enums/tipo_Transaccion.enum';
import { Cuenta } from 'src/resource/cuentas/entities/cuenta.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class ClientService {

  constructor(private cuentasService: CuentasService,
    private transaccionService: TransaccionService
  ) { }

  async validar_cuenta(Destinatario: any) {
    let validacion: any = await activar_Cuenta(Destinatario);
    let template_email = validacion.template_email;
    await enviar_Email(Destinatario, template_email);
    return {
      status: 201,
      codigo: validacion.numero_Activacion
    };
  }

  async solicitar_Codigo_activacion(Destinatario: any) {

    const codigo = await this.validar_cuenta(Destinatario);

    const cuenta_Destinatario: any = await this.transaccionService.transaction(Tipo_Transaccion.Consultar_Con_Parametros, Cuenta, '', 'cuenta_Identificador', Destinatario )

    console.log(cuenta_Destinatario);

    const codigo_encriptado = await bcrypt.hash(codigo.codigo, 10);

    await this.transaccionService.transaction(Tipo_Transaccion.Actualizar_Con_Parametros, Cuenta, codigo_encriptado, 'cuenta_Numero_Activacion', cuenta_Destinatario[0].id_Cuenta);

    return {
      status: 201,
      message: Exito_Cuentas.CORREO_ENVIADO
    }
  }

  async actualizar_contraseña(Destinatario: any) {
    let actualizacion: any;
    let template_email: any;

    actualizacion = await actualizar_Contraseña(Destinatario);

    template_email = actualizacion.template_email;
    await enviar_Email(Destinatario, template_email);

    let registro = await this.cuentasService.registrar_codigo(actualizacion.numero_Activacion, Destinatario);
  
    if (registro.status == 201) {
      return {
        status: 201,
        message: Exito_Cuentas.CORREO_ENVIADO
      }
    } else {
      return {
        status: 400,
        message: Errores_Cuentas.CODIGO_NO_GENERADO
      }
    }

  }

}
