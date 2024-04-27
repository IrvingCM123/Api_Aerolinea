import { PartialType } from '@nestjs/swagger';
import { CreateTarifaClaseDto } from '../create/create-tarifa-clase.dto';

export class UpdateTarifaClaseDto extends PartialType(CreateTarifaClaseDto) {}
