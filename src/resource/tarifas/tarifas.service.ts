import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateTarifaDto } from './dto/create-tarifa.dto';
import { UpdateTarifaDto } from './dto/update-tarifa.dto';
import { Tarifa } from './entities/tarifa.entity';

@Injectable()
export class TarifasService {
  private readonly logger = new Logger('TarifasService');

  constructor(
    @InjectRepository(Tarifa)
    private readonly tarifasRepository: Repository<Tarifa>,
  ) {}

  async create(createTarifaDto: CreateTarifaDto) {
    try {
      const tarifa = this.tarifasRepository.create(createTarifaDto);
      await this.tarifasRepository.save(tarifa);
      return tarifa;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.tarifasRepository.find();
  }

  async findOne(id: number | FindOneOptions<Tarifa>) {
    const options: FindOneOptions<Tarifa> =
      typeof id === 'number' ? { where: { id } } : id;
    const tarifa = await this.tarifasRepository.findOne(options);
    if (!tarifa) {
      if (typeof id === 'number') {
        throw new NotFoundException(`Tarifa with ID ${id} not found`);
      } else {
        throw new NotFoundException(`Tarifa not found`);
      }
    }
    return tarifa;
  }

  async update(id: number, updateTarifaDto: UpdateTarifaDto) {
    const tarifa = await this.findOne(id);
    this.tarifasRepository.merge(tarifa, updateTarifaDto);
    return await this.tarifasRepository.save(tarifa);
  }

  async remove(id: number) {
    const tarifa = await this.findOne(id);
    return await this.tarifasRepository.remove(tarifa);
  }

  private handleDBExceptions(error: any) {
    this.logger.error(error);
    throw new Error('Unexpected error occurred');
  }
}
