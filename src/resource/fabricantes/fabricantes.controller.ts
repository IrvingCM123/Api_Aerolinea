import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FabricantesService } from './fabricantes.service';
import { CreateFabricanteDto } from './dto/create-fabricante.dto';
import { UpdateFabricanteDto } from './dto/update-fabricante.dto';

@Controller('fabricantes')
export class FabricantesController {
  constructor(private readonly fabricantesService: FabricantesService) {}

  @Post()
  create(@Body() createFabricanteDto: CreateFabricanteDto) {
    return this.fabricantesService.create(createFabricanteDto);
  }

  @Get()
  findAll() {
    return this.fabricantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fabricantesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFabricanteDto: UpdateFabricanteDto,
  ) {
    return this.fabricantesService.update(+id, updateFabricanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fabricantesService.remove(+id);
  }
}
