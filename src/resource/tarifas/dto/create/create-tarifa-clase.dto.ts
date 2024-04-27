import { ApiProperty } from '@nestjs/swagger';

export class CreateTarifaClaseDto {
  @ApiProperty({
    description: 'Clase de viaje asociada a la tarifa',
    nullable: false,
  })
  claseViaje: string;

  @ApiProperty({ description: 'Precio de la tarifa de clase', nullable: false })
  precioTarifa: number;
}
