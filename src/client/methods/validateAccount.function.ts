import { template_Cuenta_Activacion } from "../template/emailValidateAccount.template";

function generar_Numero_Random(): string {
    const numero_Random = Math.floor(100 + Math.random() * 900); // Genera un número aleatorio de 100 a 999
    return numero_Random.toString(); // Convierte el número a cadena
}

function generar_Formato_Codigo(): string {
    const primera_Parte = generar_Numero_Random(); // Genera la primera parte del número
    const segunda_Parte = generar_Numero_Random(); // Genera la segunda parte del número
    const tercera_Parte = generar_Numero_Random(); // Genera la tercera parte del número

    return `${primera_Parte}-${segunda_Parte}-${tercera_Parte}`; // Retorna el número aleatorio con el formato especificado
}

export function activar_Cuenta(usuario_Email: string) {
    const accountNumber = generar_Formato_Codigo(); // Genera un número de cuenta aleatorio
    // Quizá guardar el número generado en la bd para validar que sea el mismo, por lo mientras solo se imprime en consola y se retorna al usuario
    let template_email = template_Cuenta_Activacion(usuario_Email, accountNumber); // Genera el template del email
    return { template_email, accountNumber} ;
}

export function actualizar_Contraseña() {

}