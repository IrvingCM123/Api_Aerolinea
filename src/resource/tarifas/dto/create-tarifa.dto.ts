import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Ubicacion } from '../../../resource/ubicaciones/entities/ubicacion.entity';

export class CreateTarifaDto {
  @IsNotEmpty()
  origen: Ubicacion;

  @IsNotEmpty()
  destino: Ubicacion;

  @IsOptional()
  @IsNumber()
  tarifaClase?: number;

  @IsOptional()
  @IsNumber()
  tarifaDistancia?: number;
}
