import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateVueloDto } from './dto/update-vuelo.dto';
import { Vuelo } from './entities/vuelo.entity';

@Injectable()
export class VuelosService {
  private readonly logger = new Logger('VuelosService');

  constructor(
    @InjectRepository(Vuelo)
    private readonly vueloRepository: Repository<Vuelo>,
  ) {}

  async create(createVueloDto: CreateVueloDto) {
    try {
      const vuelo = this.vueloRepository.create(createVueloDto);
      await this.vueloRepository.save(vuelo);
      return vuelo;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.vueloRepository.find();
  }

  async findOne(id: number | FindOneOptions<Vuelo>) {
    const options: FindOneOptions<Vuelo> =
      typeof id === 'number' ? { where: { Vuelo_ID: id } } : id;
    const vuelo = await this.vueloRepository.findOne(options);
    if (!vuelo) {
      if (typeof id === 'number') {
        throw new NotFoundException(`Vuelo with ID ${id} not found`);
      } else {
        throw new NotFoundException(`Vuelo not found`);
      }
    }
    return vuelo;
  }

  async update(id: number, updateVueloDto: UpdateVueloDto) {
    const vuelo = await this.findOne(id);
    this.vueloRepository.merge(vuelo, updateVueloDto);
    return await this.vueloRepository.save(vuelo);
  }

  async remove(id: number) {
    const vuelo = await this.findOne(id);
    return await this.vueloRepository.remove(vuelo);
  }

  private handleDBExceptions(error: any) {
    this.logger.error(error);
    throw new Error('Unexpected error occurred');
  }
}
