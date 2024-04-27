import { PartialType } from '@nestjs/swagger';
import { CreateTarifaDistanciaDto } from '../create/create-tarifa-distancia.dto';

export class UpdateTarifaDistanciaDto extends PartialType(
  CreateTarifaDistanciaDto,
) {}
