import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsDate,
  IsNumber,
} from 'class-validator';

export class CreateTrabajadorDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @IsNotEmpty()
  @IsString()
  telefono: string;

  @IsNotEmpty()
  @IsEmail()
  correoElectronico: string;

  @IsNotEmpty()
  @IsDate()
  fechaNacimiento: Date;

  @IsNotEmpty()
  @IsString()
  nacionalidad: string;

  @IsNotEmpty()
  @IsNumber()
  horasVuelo: number;
}
