import {
  IsNotEmpty,
  IsString,
  IsInt,
  Min,
  IsArray,
  ArrayMinSize,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTripulacionDto {
  @ApiProperty({
    description: 'Nombre del equipo de tripulación',
    nullable: false,
    minLength: 2,
    maxLength: 20,
  })
  @IsNotEmpty()
  @IsString()
  nombre_Equipo: string;

  @ApiProperty({
    description: 'Cantidad de tripulantes',
    nullable: false,
    minimum: 1,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  cantidad_Tripulantes: number;

  @ApiProperty({
    description: 'Clase del viaje',
    nullable: false,
    minLength: 2,
    maxLength: 20,
  })
  @IsNotEmpty()
  @IsString()
  clase_Viaje: string;

  @ApiProperty({
    description: 'Valoración de la tripulación',
    nullable: false,
    minimum: 0,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  valoracion: number;

  @ApiProperty({
    description: 'IDs de los trabajadores',
    nullable: false,
    type: [Number],
    example: [1, 2, 3],
  })
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  trabajadorIds: number[];
}
