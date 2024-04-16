import { template_Email_Codigos } from "../template/template_Info_Usuario.template";
import { generar_Formato_Codigo } from "./generar_Numeros.function";
import { TransaccionService } from "src/common/transaction/transaccion.service";
import { Cuenta } from "src/resource/cuentas/entities/cuenta.entity";

export function actualizar_Contraseña(usuario_Email: string) {
    const numero_Activacion = generar_Formato_Codigo(2); // Genera un número de cuenta aleatorio

    let template_email = template_Email_Codigos(
        usuario_Email, 
        numero_Activacion, 
        "Recuperación de contraseña", 
        "Para recuperar su contraseña, por favor revise su correo electrónico y registre los siguientes números: " 
    ); // Genera el template del email

    return { template_email, numero_Activacion };
}
