import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmail,
  IsDate,
} from 'class-validator';

export class CreatePilotoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsNumber()
  @IsNotEmpty()
  telefono: number;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  correoElectronico: string;

  @IsString()
  @IsNotEmpty()
  licenciaPiloto: string;

  @IsDate()
  @IsNotEmpty()
  fechaNacimiento: Date;

  @IsString()
  @IsNotEmpty()
  nacionalidad: string;

  @IsNumber()
  @IsNotEmpty()
  horasVuelo: number;

  @IsString()
  @IsNotEmpty()
  certificaciones: string;

  @IsDate()
  @IsNotEmpty()
  fechaExpedicionLicencia: Date;
}
