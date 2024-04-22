import { IsNotEmpty, IsString, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Ubicacion } from '../../ubicaciones/entities/ubicacion.entity';
import { TipoAeropuerto } from 'src/common/enums/tipo_aeropuerto.enum';

export class CreateAeropuertoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEnum(TipoAeropuerto)
  tipo: TipoAeropuerto;

  @ValidateNested()
  @Type(() => Ubicacion)
  ubicacion: Ubicacion;
}
