import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ModelosService } from './modelos.service';
import { CreateModeloAvionDto } from './dto/create-modelo.dto';
import { UpdateModeloAvionDto } from './dto/update-modelo.dto';

@Controller('modelos')
export class ModelosController {
  constructor(private readonly modelosService: ModelosService) {}

  @Post()
  create(@Body() createModeloDto: CreateModeloAvionDto) {
    return this.modelosService.create(createModeloDto);
  }

  @Get()
  findAll() {
    return this.modelosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modelosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateModeloDto: UpdateModeloAvionDto,
  ) {
    return this.modelosService.update(+id, updateModeloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modelosService.remove(+id);
  }
}
