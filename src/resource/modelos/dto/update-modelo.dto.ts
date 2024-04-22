import { PartialType } from '@nestjs/mapped-types';
import { CreateModeloAvionDto } from './create-modelo.dto';

export class UpdateModeloAvionDto extends PartialType(CreateModeloAvionDto) {}
