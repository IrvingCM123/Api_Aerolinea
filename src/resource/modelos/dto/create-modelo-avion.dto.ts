import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CategoriaModelo } from '../../../common/enums/categoria-modelo.enum';

export class CreateModeloAvionDto {
  @ApiProperty({
    description: 'Nombre del modelo de avión',
    nullable: false,
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

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
  categoria: CategoriaModelo;
}
