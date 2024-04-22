import { IsNotEmpty, IsNumber, IsString, IsEnum } from 'class-validator';
import { ESTADO_OPERATIVO } from '../../../common/enums/estado-operativo.enum';
import { ModeloAvion } from '../../modelos/entities/modelo.entity';

export class CreateAvionDto {
  @IsNotEmpty()
  modeloAvion: ModeloAvion;

  @IsNumber()
  @IsNotEmpty()
  capacidadPasajero: number;

  @IsNumber()
  @IsNotEmpty()
  capacidadCarga: number;

  @IsNumber()
  @IsNotEmpty()
  velocidadMaxima: number;

  @IsNumber()
  @IsNotEmpty()
  anoFabricacion: number;

  @IsString()
  @IsNotEmpty()
  tipoMotor: string;

  @IsString()
  @IsNotEmpty()
  autonomia: string;

  @IsEnum(ESTADO_OPERATIVO)
  @IsNotEmpty()
  estadoOperativo: string;
}
