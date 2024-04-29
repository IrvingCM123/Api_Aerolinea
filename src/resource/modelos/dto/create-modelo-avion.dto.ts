import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CategoriaModelo } from '../../../common/enums/categoria-modelo.enum';
import { EstadoOperativo } from 'src/common/enums/estado-operativo.enum';

export class CreateModeloAvionDto {
  @ApiProperty({
    description: 'Nombre del modelo de avión',
    nullable: false,
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  modelo_Avion_Nombre: string;

  @ApiProperty({
    description: 'Nombre del modelo de avión',
    nullable: false,
    example: [
      EstadoOperativo.OPERATIVO,
      EstadoOperativo.MANTENIMIENTO,
      EstadoOperativo.FUERA_DE_SERVICIO,
    ],
  })
  @IsEnum(EstadoOperativo)
  @IsNotEmpty()
  modelo_Avion_Estado: EstadoOperativo;

  @ApiProperty({
    enum: CategoriaModelo,
    description: 'Categoría del modelo de avión',
    nullable: false,
    example: [
      CategoriaModelo.COMERCIAL,
      CategoriaModelo.CARGUERO,
      CategoriaModelo.MILITAR,
      CategoriaModelo.PRIVADO,
    ],
  })
  @IsEnum(CategoriaModelo)
  @IsNotEmpty()
  modelo_Avion_Categoria: CategoriaModelo;
}
