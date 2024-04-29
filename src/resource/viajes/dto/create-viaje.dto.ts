import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsEnum,
  IsNumber,
} from 'class-validator';
import { EstadoViaje } from 'src/common/enums/estado-viaje.enum';

export class CreateViajeDto {
  @IsNotEmpty()
  @IsDate()
  fechaSalida: Date;

  @IsNotEmpty()
  @IsDate()
  fechaLlegada: Date;

  @IsEnum(EstadoViaje)
  estadoViaje: EstadoViaje;

  @IsNotEmpty()
  @IsNumber()
  numeroAvion: number;

  @IsNotEmpty()
  @IsNumber()
  aeropuertoDestino: number;

  @IsNotEmpty()
  @IsNumber()
  aeropuertoOrigen: number;
}
