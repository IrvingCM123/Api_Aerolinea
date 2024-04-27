import { ApiProperty } from '@nestjs/swagger';

export class CreateTarifaDistanciaDto {
  @ApiProperty({
    description: 'Ubicación de origen para la tarifa de distancia',
    nullable: false,
  })
  origen: string;

  @ApiProperty({
    description: 'Ubicación de destino para la tarifa de distancia',
    nullable: false,
  })
  destino: string;

  @ApiProperty({
    description: 'Distancia en kilómetros entre el origen y el destino',
    nullable: false,
  })
  distancia: number;

  @ApiProperty({
    description: 'Precio de la tarifa de distancia',
    nullable: false,
  })
  precioTarifa: number;
}
