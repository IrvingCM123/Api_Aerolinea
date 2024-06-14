import { IsNumber, IsISO8601 } from 'class-validator';

export class CreateReservaDto {
  @IsNumber()
  readonly vuelo_Id: number;

  @IsNumber()
  readonly id_usuario: number;

  @IsISO8601({ strict: true })
  readonly fechaReserva: string;

  @IsISO8601({ strict: true })
  readonly fechaExpiracion: string;
}