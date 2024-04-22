import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateAvionDto } from './dto/create-avion.dto';
import { UpdateAvionDto } from './dto/update-avion.dto';
import { Avion } from './entities/avion.entity';

@Injectable()
export class AvionesService {
  private readonly logger = new Logger('AvionesService');

  constructor(
    @InjectRepository(Avion)
    private readonly avionRepository: Repository<Avion>,
  ) {}

  async create(createAvionDto: CreateAvionDto) {
    try {
      const avion = this.avionRepository.create(createAvionDto);
      await this.avionRepository.save(avion);
      return avion;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.avionRepository.find();
  }

  async findOne(id: number | FindOneOptions<Avion>) {
    const options: FindOneOptions<Avion> =
      typeof id === 'number' ? { where: { id } } : id;
    const avion = await this.avionRepository.findOne(options);
    if (!avion) {
      if (typeof id === 'number') {
        throw new NotFoundException(`Avion with ID ${id} not found`);
      } else {
        throw new NotFoundException(`Avion not found`);
      }
    }
    return avion;
  }

  async update(id: number, updateAvionDto: UpdateAvionDto) {
    const avion = await this.findOne(id);
    this.avionRepository.merge(avion, updateAvionDto);
    return await this.avionRepository.save(avion);
  }

  async remove(id: number) {
    const avion = await this.findOne(id);
    return await this.avionRepository.remove(avion);
  }

  private handleDBExceptions(error: any) {
    this.logger.error(error);
    throw new Error('Unexpected error occurred');
  }
}
