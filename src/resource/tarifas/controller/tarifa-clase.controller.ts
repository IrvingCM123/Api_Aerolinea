import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { TarifaClaseService } from '../services/tarifa-clase.service';
import { CreateTarifaClaseDto } from '../dto/create/create-tarifa-clase.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tarifas Clase')
@Controller('tarifas-clase')
export class TarifaClaseController {
  constructor(private readonly tarifaClaseService: TarifaClaseService) {}

  @Post()
  async create(@Body() createTarifaClaseDto: CreateTarifaClaseDto) {
    return this.tarifaClaseService.create(createTarifaClaseDto);
  }

  @Get()
  async findAll() {
    return this.tarifaClaseService.findAll();
  }

  @Get('buscarTarfiaClase/:nombre')
  async findByClassName(@Param('nombre') nombre: string) {
    try {
      const tarifaClase = await this.tarifaClaseService.findbyName(nombre);
      return { status: 200, data: tarifaClase };
    } catch (error) {
      if (error instanceof NotFoundException) {
        return { status: 404, message: error.message };
      }
      return { status: 500, message: 'Internal server error' };
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTarifaClaseDto: CreateTarifaClaseDto,
  ) {
    return this.tarifaClaseService.update(+id, updateTarifaClaseDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tarifaClaseService.remove(+id);
  }
}
