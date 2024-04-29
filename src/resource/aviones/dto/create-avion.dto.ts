import { IsNotEmpty, IsNumber, IsString, IsEnum } from 'class-validator';
import { EstadoOperativo } from '../../../common/enums/estado-operativo.enum';
import { ApiProperty } from '@nestjs/swagger';
import { EstadoLogico } from 'src/common/enums/estado-logico.enum';

export class CreateAvionDto {
  @ApiProperty({
    description: 'ID del modelo de avión del avión',
    nullable: false,
  })
  @IsNotEmpty()
  modeloAvionId: number;

  @ApiProperty({
    description: 'ID del fabricante del avión',
    nullable: false,
  })
  @IsNotEmpty()
  fabricanteId: number;

  @ApiProperty({
    description: 'Capacidad de pasajeros del avión',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  avion_Capacidad_Pasajeros: number;

  @ApiProperty({
    description: 'Capacidad de carga del avión',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  avion_Capacidad_Carga: number;

  @ApiProperty({
    description: 'Velocidad máxima del avión',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  avion_Velocidad_Maxima: number;

  @ApiProperty({
    description: 'Año de fabricación del avión',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  avion_Anio_Fabricacion: number;

  @ApiProperty({
    enum: EstadoOperativo,
    description: 'Estado operativo del avión',
    nullable: false,
    example: [
      EstadoOperativo.OPERATIVO,
      EstadoOperativo.MANTENIMIENTO,
      EstadoOperativo.FUERA_DE_SERVICIO,
    ],
  })
  @IsEnum(EstadoOperativo)
  @IsNotEmpty()
  avion_Estado_Operativo: EstadoOperativo;

  @ApiProperty({
    description: 'Estado lógico del avión',
    nullable: false,
    example: [
      EstadoLogico.ACTIVO,
      EstadoLogico.INACTIVO,
      EstadoLogico.ELIMINADO,
    ],
  })
  @IsEnum(EstadoOperativo)
  @IsNotEmpty()
  avion_Estado_Logico: EstadoLogico;

  @ApiProperty({
    description: 'Tipo de motor del avión',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  avion_Tipo_Motor: string;

  @ApiProperty({
    description: 'Autonomía del avión',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  avion_Autonomia: string;
}
