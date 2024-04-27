import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { TipoAeropuerto } from 'src/common/enums/tipo_aeropuerto.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAeropuertoDto {
  @ApiProperty({
    description: 'Nombre del aeropuerto',
    nullable: false,
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    enum: TipoAeropuerto,
    description: 'Tipo de aeropuerto',
    nullable: false,
    example: [
      TipoAeropuerto.NACIONAL,
      TipoAeropuerto.INTERNACIONAL,
      TipoAeropuerto.PRIVADO,
    ],
  })
  @IsEnum(TipoAeropuerto)
  tipo: TipoAeropuerto;
}
