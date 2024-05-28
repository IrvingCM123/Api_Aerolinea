import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { ViajesService } from './viajes.service';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';

@Controller('viajes')
export class ViajesController {
  constructor(private readonly viajesService: ViajesService) { }

  @Post()
  async create(@Body() createViajeDto: CreateViajeDto) {
    return this.viajesService.create(createViajeDto);
  }

  @Get()
  async findAll() {
    return this.viajesService.findAll();
  }
  @Get("/busq")
  async findVuelosofViajes(
    @Query('lugarD') destino: string,
    @Query('lugarO') origen: string,
    @Query('fechasalida') fecha: string

  ) {
    if (!destino || !origen) {
      throw new BadRequestException("Necesitamos un Origen y un Destino")
    }
    return this.viajesService.findVueloByViajes(destino, origen, fecha)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.viajesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateViajeDto: UpdateViajeDto,
  ) {
    return this.viajesService.update(+id, updateViajeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.viajesService.remove(+id);
  }
}
