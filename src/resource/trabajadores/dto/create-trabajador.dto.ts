import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsDate,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CreateTrabajadorDto {
  @ApiProperty({
    description: 'Nombre del trabajador',
    nullable: false,
    minLength: 2,
  })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({
    description: 'Apellidos del trabajador',
    nullable: false,
    minLength: 2,
  })
  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @ApiProperty({
    description: 'Teléfono del trabajador',
    nullable: false,
    minLength: 10,
  })
  @IsNotEmpty()
  @IsString()
  telefono: string;

  @ApiProperty({
    description: 'Correo electrónico del trabajador',
    nullable: false,
    minLength: 5,
  })
  @IsNotEmpty()
  @IsEmail()
  correoElectronico: string;

  @ApiProperty({
    description: 'Fecha de nacimiento del trabajador',
    nullable: false,
  })
  @IsNotEmpty()
  @IsDateString()
  fechaNacimiento: Date;

  @ApiProperty({
    description: 'Nacionalidad del trabajador',
    nullable: false,
    minLength: 2,
  })
  @IsNotEmpty()
  @IsString()
  nacionalidad: string;

  @ApiProperty({
    description: 'Horas de vuelo del trabajador',
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  horasVuelo: number;
}
