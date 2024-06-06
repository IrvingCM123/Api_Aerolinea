import { IsNumber, IsDate } from 'class-validator';

export class CreateReservaDto {
  @IsNumber()
  readonly vueloId: number;

  @IsNumber()
  readonly usuarioId: number;

  @IsDate()
  readonly fechaReserva: Date;

  @IsDate()
  readonly fechaExpiracion: Date;
}
