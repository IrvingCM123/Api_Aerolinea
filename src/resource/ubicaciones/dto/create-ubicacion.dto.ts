import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUbicacionDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  ubicacion_Nombre: string;
}