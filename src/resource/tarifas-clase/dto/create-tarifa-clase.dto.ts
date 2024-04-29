import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { EstadoLogico } from 'src/common/enums/estado-logico.enum';

export class CreateTarifaClaseDto {
  @ApiProperty({
    description: 'Nombre de la tarifa de clase',
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  tarifa_Clase_Nombre: string;

  @ApiProperty({
    description: 'Estado de la tarifa de clase',
    nullable: false,
    example: [
      EstadoLogico.ACTIVO,
      EstadoLogico.INACTIVO,
      EstadoLogico.ELIMINADO,
    ],
  })
  @IsNotEmpty()
  @IsString()
  tarifa_Clase_Estado: EstadoLogico;

  @ApiProperty({
    description: 'Precio de la tarifa de clase',
    nullable: false,
  })
  @IsNotEmpty()
  @IsInt()
  precioTarifa: number;
}
