import { ApiProperty } from '@nestjs/swagger';
import { Estado_Logico } from 'src/common/enums/estado_logico.enum';

export class CreateTarifaClaseDto {
  @ApiProperty({
    description: 'Nombre de la tarifa de clase',
    nullable: false,
  })
  tarifa_Clase_Nombre: string;

  @ApiProperty({
    description: 'Estado de la tarifa de clase',
    nullable: false,
    example: [
      Estado_Logico.ACTIVO,
      Estado_Logico.INACTIVO,
      Estado_Logico.ELIMINADO,
    ],
  })
  tarifa_Clase_Estado: Estado_Logico;

  @ApiProperty({ description: 'Precio de la tarifa de clase', nullable: false })
  precioTarifa: number;
}
