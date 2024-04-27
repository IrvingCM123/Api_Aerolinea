import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmail,
  IsDate,
  ArrayMinSize,
} from 'class-validator';

export class CreatePilotoDto {
  @ApiProperty({
    description: 'Nombre del piloto',
    nullable: false,
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    description: 'Apellidos del piloto',
    nullable: false,
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @ApiProperty({
    description: 'Dirección del piloto',
    nullable: false,
    minLength: 2,
  })
  @IsNumber()
  @IsNotEmpty()
  telefono: number;

  @ApiProperty({
    description: 'Correo electrónico del piloto',
    nullable: false,
    minLength: 2,
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  correoElectronico: string;

  @ApiProperty({
    description: 'Número de licencia del piloto',
    nullable: false,
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  licenciaPiloto: string;

  @ApiProperty({
    description: 'Fecha de nacimiento del piloto',
    nullable: false,
  })
  @IsDate()
  @IsNotEmpty()
  fechaNacimiento: Date;

  @ApiProperty({
    description: 'Nacionalidad del piloto',
    nullable: false,
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  nacionalidad: string;

  @ApiProperty({
    description: 'Número de horas de vuelo del piloto',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  horasVuelo: number;

  @ApiProperty({
    description: 'Certificaciones del piloto',
    nullable: false,
    minItems: 1,
    type: [String],
  })
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @ArrayMinSize(1)
  certificaciones: string[];

  @ApiProperty({
    description: 'Fecha de expedición de la licencia del piloto',
    nullable: false,
  })
  @IsDate()
  @IsNotEmpty()
  fechaExpedicionLicencia: Date;
}
