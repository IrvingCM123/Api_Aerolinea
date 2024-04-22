import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TripulacionesService } from './tripulaciones.service';
import { CreateTripulacionDto } from './dto/create-tripulacion.dto';
import { UpdateTripulacionDto } from './dto/update-tripulacion.dto';

@Controller('tripulaciones')
export class TripulacionesController {
  constructor(private readonly tripulacionesService: TripulacionesService) {}

  @Post()
  create(@Body() createTripulacioneDto: CreateTripulacionDto) {
    return this.tripulacionesService.create(createTripulacioneDto);
  }

  @Get()
  findAll() {
    return this.tripulacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripulacionesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTripulacioneDto: UpdateTripulacionDto,
  ) {
    return this.tripulacionesService.update(+id, updateTripulacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripulacionesService.remove(+id);
  }
}
