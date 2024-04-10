import { email_Validate_Account_Template } from "../template/emailValidateAccount.template";

function generateRandomNumber(): string {
    const randomNumber = Math.floor(100 + Math.random() * 900); // Genera un número aleatorio de 100 a 999
    return randomNumber.toString(); // Convierte el número a cadena
}

function generateRandomAccountNumber(): string {
    const firstPart = generateRandomNumber(); // Genera la primera parte del número
    const secondPart = generateRandomNumber(); // Genera la segunda parte del número
    const thirdPart = generateRandomNumber(); // Genera la tercera parte del número

    return `${firstPart}-${secondPart}-${thirdPart}`; // Retorna el número aleatorio con el formato especificado
}

export function validateAccount(usuario_Email: string) {
    const accountNumber = generateRandomAccountNumber(); // Genera un número de cuenta aleatorio
    // Quizá guardar el número generado en la bd para validar que sea el mismo, por lo mientras solo se imprime en consola y se retorna al usuario
    let template_email = email_Validate_Account_Template(usuario_Email, accountNumber); // Genera el template del email
    return template_email;
}
