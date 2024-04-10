// Import necessary modules and functions
import { email_template } from '../template/email.template';
import * as dotenv from 'dotenv';
import * as nodemailer from "nodemailer";

// Load environment variables
dotenv.config();

// Export asynchronous function for sending email
export async function enviarEmail(Data: any): Promise<string> {
    try {
        // Extract recipient and data from input
        const Destinatario = Data.Destinatario;
        const Datos = Data.Data;

        // Create transporter for sending email
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "bagdiana03@gmail.com",
                pass: "upwlojvmpxuahhyy",
            },
        });

        // Convert ticket image to base64 format
        let imagen_boleto_path = await convert_Image(Datos);

        // Convert ticket data to Google Wallet format
        let url_wallet = await convertToWallet(Datos);

        // Generate HTML email template
        const html_template = email_template(Datos, imagen_boleto_path, url_wallet);

        // Construct email message
        const msg = {
            to: Destinatario,
            from: 'bagdiana03@gmail.com',
            subject: 'You have your ticket!',
            html: html_template,
        };

        // Send email
        transporter.sendMail(msg, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
        return 'Email sent successfully';
    } catch (error) {
        // Throw error if email sending fails
        throw new Error('Error sending email');
    }
}
