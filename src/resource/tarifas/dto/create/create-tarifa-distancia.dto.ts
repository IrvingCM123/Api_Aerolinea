import { ApiProperty } from '@nestjs/swagger';

export class CreateTarifaDistanciaDto {
  @ApiProperty({
    description: 'Nombre de la tarifa de distancia',
    nullable: false,
  })
  tarifa_distancia_Nombre: string;

  @ApiProperty({
    description: 'Ubicación de origen para la tarifa de distancia',
    nullable: false,
  })
  origenId: number;

  @ApiProperty({
    description: 'Ubicación de destino para la tarifa de distancia',
    nullable: false,
  })
  destinoId: number;

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
