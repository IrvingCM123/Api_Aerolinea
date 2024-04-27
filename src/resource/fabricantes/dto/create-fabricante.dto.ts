import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFabricanteDto {
  @ApiProperty({
    description: 'Nombre del fabricante',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    description: 'Descripción del fabricante',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    description: 'Dirección del fabricante',
    nullable: false,
    minLength: 10,
  })
  @IsString()
  @IsNotEmpty()
  telefono: string;

  @ApiProperty({
    description: 'Correo electrónico del fabricante',
    nullable: false,
    minLength: 5,
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
