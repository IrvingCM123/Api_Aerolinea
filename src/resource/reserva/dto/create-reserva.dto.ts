import { ApiProperty } from '@nestjs/swagger';
import { IsISO8601, IsNotEmpty, IsNumber } from 'class-validator';
import { IsDate, IsOptional } from 'class-validator';

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
    description: 'Fecha y hora de la reserva',
    nullable: false,
  })
  @IsISO8601({ strict: true })
  @IsNotEmpty()
  readonly fechaReserva: string;

  @ApiProperty({
    description: 'Fecha y hora de expiración de la reserva',
    nullable: false,
  })
  @IsISO8601({ strict: true })
  @IsNotEmpty()
  readonly fechaExpiracion: string;

  @ApiProperty({
    description: 'Cantidad de pasajeros',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  readonly cantidadPasajeros: number;
}
