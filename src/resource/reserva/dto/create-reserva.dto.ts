import { ApiProperty } from '@nestjs/swagger';
import { IsISO8601, IsNotEmpty, IsNumber, IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateBoletoDto } from '../../boleto/dto/create-boleto.dto';

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

  @ApiProperty({
    description: 'Cantidad de boletos a comprar',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  readonly cantidadBoletos: number;

  @ApiProperty({
    description: 'Indicador de si es viaje redondo',
    nullable: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  readonly viajeRedondo: boolean;

  @ApiProperty({
    description: 'Información del boleto',
    type: CreateBoletoDto,
    isArray: true,
    nullable: false,
  })
  @ValidateNested({ each: true })
  @Type(() => CreateBoletoDto)
  @IsNotEmpty()
  readonly boletos: CreateBoletoDto[];
}
