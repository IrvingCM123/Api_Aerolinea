import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateTripulacionDto {
  @IsNotEmpty()
  @IsString()
  nombreEquipo: string;

  @IsNumber()
  valoracion?: number;
}
