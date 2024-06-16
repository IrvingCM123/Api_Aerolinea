import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class CreateBoletoDto {
  @ApiProperty({
    description: 'ID del usuario',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  Usuario: number;

  @ApiProperty({
    description: 'ID del viaje',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  Viaje: number;

  @ApiProperty({
    description: 'Número de boleto',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  Numero_Boleto: string;

  @ApiProperty({
    description: 'Fecha de compra del boleto',
    nullable: false,
  })
  @IsNotEmpty()
  Fecha_Compra: Date;

  @ApiProperty({
    description: 'Precio del boleto',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  Precio: number;

  @ApiProperty({
    description: 'Estado de pago del boleto',
    nullable: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  Estado_Pago: boolean;

  @ApiProperty({
    description: 'ID de la reserva',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  reserva_ID: number;
}
