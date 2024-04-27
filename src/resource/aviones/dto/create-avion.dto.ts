import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsEnum,
  IsObject,
} from 'class-validator';
import { ESTADO_OPERATIVO } from '../../../common/enums/estado-operativo.enum';
import { ApiProperty } from '@nestjs/swagger';
import { ModeloAvion } from '../../modelos/entities/modelo-avion.entity';

export class CreateAvionDto {
  @ApiProperty({
    type: () => ModeloAvion,
    description: 'Modelo de avión',
    nullable: false,
  })
  @IsObject()
  @IsNotEmpty()
  modeloAvion: ModeloAvion;

  @ApiProperty({
    description: 'Capacidad de pasajeros del avión',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  capacidadPasajero: number;

  @ApiProperty({
    description: 'Capacidad de carga del avión',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  capacidadCarga: number;

  @ApiProperty({
    description: 'Velocidad máxima del avión',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  velocidadMaxima: number;

  @ApiProperty({
    description: 'Año de fabricación del avión',
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  anioFabricacion: number;

  @ApiProperty({
    description: 'Tipo de motor del avión',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  tipoMotor: string;

  @ApiProperty({
    description: 'Autonomía del avión',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  autonomia: string;

  @ApiProperty({
    enum: ESTADO_OPERATIVO,
    description: 'Estado operativo del avión',
    nullable: false,
    example: [
      ESTADO_OPERATIVO.OPERATIVO,
      ESTADO_OPERATIVO.MANTENIMIENTO,
      ESTADO_OPERATIVO.FUERA_DE_SERVICIO,
    ],
  })
  @IsEnum(ESTADO_OPERATIVO)
  @IsNotEmpty()
  estadoOperativo: string;
}
