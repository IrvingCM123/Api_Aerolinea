import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';
import { BoletosService } from './boleto.service';

@Controller('boletos')
export class BoletosController {
  constructor(private readonly boletoService: BoletosService) {}

  @Post()
  async create(@Body() createBoletoDto: CreateBoletoDto) {
    return this.boletoService.create(createBoletoDto);
  }

  @Get()
  async findAll() {
    return this.boletoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.boletoService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBoletoDto: UpdateBoletoDto,
  ) {
    return this.boletoService.update(+id, updateBoletoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.boletoService.remove(+id);
  }
}
