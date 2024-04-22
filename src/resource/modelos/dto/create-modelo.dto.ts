import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateFabricanteDto } from '../../fabricantes/dto/create-fabricante.dto';
import { CreateAvionDto } from '../../aviones/dto/create-avion.dto';

export class CreateModeloAvionDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @ValidateNested()
  @Type(() => CreateFabricanteDto)
  fabricante: CreateFabricanteDto;

  @ValidateNested()
  @Type(() => CreateAvionDto)
  avion: CreateAvionDto;
}
