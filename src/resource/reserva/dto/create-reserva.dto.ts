import { IsNumber, IsISO8601 } from 'class-validator';

export class CreateReservaDto {
  @IsNumber()
  readonly vueloId: number;

  @IsNumber()
  readonly usuarioId: number;

  @IsISO8601({ strict: true })
  readonly fechaReserva: string;

  @IsISO8601({ strict: true })
  readonly fechaExpiracion: string;
}