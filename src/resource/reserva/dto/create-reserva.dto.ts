import { IsInt, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateReservaDto {
  @IsNotEmpty()
  @IsInt()
  Vuelo_ID: number;

  @IsNotEmpty()
  @IsInt()
  id_Usuario: number;

  @IsInt()
  cantidadBoletos: number;

  @IsBoolean()
  viajeRedondo: boolean;
}
