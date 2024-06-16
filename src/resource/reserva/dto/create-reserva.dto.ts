import { ApiProperty } from '@nestjs/swagger';
import { IsISO8601, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateReservaDto {
  @ApiProperty({
    description: 'ID del vuelo',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  readonly Vuelo: number;

  @ApiProperty({
    description: 'ID del usuario',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  readonly Usuario: number;

  @ApiProperty({
    description: 'Fecha de reserva del vuelo',
    nullable: false,
  })
  @IsISO8601({ strict: true })
  @IsNotEmpty()
  readonly fechaReserva: string;

  @ApiProperty({
    description: 'Fecha de expiración de la reserva del vuelo',
    nullable: false,
  })
  @IsISO8601({ strict: true })
  @IsNotEmpty()
  readonly fechaExpiracion: string;
}
