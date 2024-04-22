import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AvionesService } from './aviones.service';
import { CreateAvionDto } from './dto/create-avion.dto';
import { UpdateAvionDto } from './dto/update-avion.dto';

@Controller('aviones')
export class AvionesController {
  constructor(private readonly avionesService: AvionesService) {}

  @Post()
  create(@Body() createAvioneDto: CreateAvionDto) {
    return this.avionesService.create(createAvioneDto);
  }

  @Get()
  findAll() {
    return this.avionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvioneDto: UpdateAvionDto) {
    return this.avionesService.update(+id, updateAvioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avionesService.remove(+id);
  }
}
