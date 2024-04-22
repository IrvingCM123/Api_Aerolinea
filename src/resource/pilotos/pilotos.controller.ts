import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PilotosService } from './pilotos.service';
import { CreatePilotoDto } from './dto/create-piloto.dto';
import { UpdatePilotoDto } from './dto/update-piloto.dto';

@Controller('pilotos')
export class PilotosController {
  constructor(private readonly pilotosService: PilotosService) {}

  @Post()
  create(@Body() createPilotoDto: CreatePilotoDto) {
    return this.pilotosService.create(createPilotoDto);
  }

  @Get()
  findAll() {
    return this.pilotosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pilotosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePilotoDto: UpdatePilotoDto) {
    return this.pilotosService.update(+id, updatePilotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pilotosService.remove(+id);
  }
}
