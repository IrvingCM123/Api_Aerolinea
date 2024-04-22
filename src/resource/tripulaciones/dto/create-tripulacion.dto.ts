import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateTripulacionDto {
  @IsNotEmpty()
  @IsString()
  nombreEquipo: string;

  @IsNotEmpty()
  @IsNumber()
  cantidadTripulantes: number;

  @IsNotEmpty()
  @IsString()
  claseViaje: string;

  @IsNumber()
  valoracion?: number;
}
