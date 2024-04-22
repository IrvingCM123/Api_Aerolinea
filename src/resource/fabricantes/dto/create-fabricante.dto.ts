import { IsNotEmpty, IsString, IsEmail, ValidateNested } from 'class-validator';
import { ModeloAvion } from '../../modelos/entities/modelo.entity';
import { Type } from 'class-transformer';

export class CreateFabricanteDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ValidateNested({ each: true })
  @Type(() => ModeloAvion)
  modelosAvion: ModeloAvion[];
}
