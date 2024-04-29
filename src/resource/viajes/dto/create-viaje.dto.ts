import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsEnum,
  IsNumber,
} from 'class-validator';
import { Estado_Viaje } from 'src/common/enums/estado-viaje.enum';

export class CreateViajeDto {
  @IsNotEmpty()
  @IsDate()
  fechaSalida: Date;

  @IsNotEmpty()
  @IsDate()
  fechaLlegada: Date;

  @IsEnum(Estado_Viaje)
  estadoViaje: Estado_Viaje;

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
