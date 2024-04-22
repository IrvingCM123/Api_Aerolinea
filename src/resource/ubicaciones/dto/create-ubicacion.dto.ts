import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUbicacionDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
}
