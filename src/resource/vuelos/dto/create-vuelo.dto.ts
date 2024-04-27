import {
  IsNumber,
  IsDate,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAvionDto } from '../../aviones/dto/create-avion.dto';
import { CreatePilotoDto } from '../../pilotos/dto/create-piloto.dto';
import { CreateTripulacionDto } from '../../tripulaciones/dto/create-tripulacion.dto';

export class CreateVueloDto {
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  fecha: Date;

  @IsNotEmpty()
  @Type(() => CreateAvionDto)
  avion: CreateAvionDto;

  @IsNotEmpty()
  @Type(() => CreatePilotoDto)
  piloto: CreatePilotoDto;

  @IsNotEmpty()
  @Type(() => CreatePilotoDto)
  copiloto: CreatePilotoDto;

  @IsNotEmpty()
  @Type(() => CreateTripulacionDto)
  tripulacion: CreateTripulacionDto;

  @IsNotEmpty()
  @IsNumber()
  horaSalida: number;

  @IsNotEmpty()
  @IsNumber()
  pasajerosTotales: number;

  @IsNotEmpty()
  @IsNumber()
  pasajerosApartados: number;

  @IsNotEmpty()
  @IsString()
  estado: string;
}
