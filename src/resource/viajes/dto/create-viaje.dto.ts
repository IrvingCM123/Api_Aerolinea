import {
  IsNotEmpty,
  IsDateString,
  IsEnum,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAvionDto } from '../../aviones/dto/create-avion.dto';
import { CreateUbicacionDto } from '../../ubicaciones/dto/create-ubicacion.dto';
import { Estado_Viaje } from '../../../common/enums/estado-viaje.enum';

export class CreateViajeDto {
  @ValidateNested()
  @Type(() => CreateUbicacionDto)
  @IsNotEmpty()
  origen: CreateUbicacionDto;

  @ValidateNested()
  @Type(() => CreateUbicacionDto)
  @IsNotEmpty()
  destino: CreateUbicacionDto;

  @IsNotEmpty()
  @IsDateString()
  fechaSalida: Date;

  @IsNotEmpty()
  @IsDateString()
  fechaLlegada: Date;

  @IsEnum(Estado_Viaje)
  @IsNotEmpty()
  estadoViaje: Estado_Viaje;

  @ValidateNested()
  @Type(() => CreateAvionDto)
  @IsNotEmpty()
  avion: CreateAvionDto;
}
