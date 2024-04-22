import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateModeloAvionDto } from './dto/create-modelo.dto';
import { UpdateModeloAvionDto } from './dto/update-modelo.dto';
import { ModeloAvion } from './entities/modelo.entity';

@Injectable()
export class ModelosService {
  private readonly logger = new Logger('ModelosService');

  constructor(
    @InjectRepository(ModeloAvion)
    private readonly modelosRepository: Repository<ModeloAvion>,
  ) {}

  async create(createModelosDto: CreateModeloAvionDto) {
    try {
      const modelo = this.modelosRepository.create(createModelosDto);
      await this.modelosRepository.save(modelo);
      return modelo;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.modelosRepository.find();
  }

  async findOne(id: number | FindOneOptions<ModeloAvion>) {
    const options: FindOneOptions<ModeloAvion> =
      typeof id === 'number' ? { where: { id } } : id;
    const modelo = await this.modelosRepository.findOne(options);
    if (!modelo) {
      if (typeof id === 'number') {
        throw new NotFoundException(`Modelo with ID ${id} not found`);
      } else {
        throw new NotFoundException(`Modelo not found`);
      }
    }
    return modelo;
  }

  async update(id: number, updateModeloDto: UpdateModeloAvionDto) {
    const modelo = await this.findOne(id);
    this.modelosRepository.merge(modelo, updateModeloDto);
    return await this.modelosRepository.save(modelo);
  }

  async remove(id: number) {
    const modelo = await this.findOne(id);
    return await this.modelosRepository.remove(modelo);
  }

  private handleDBExceptions(error: any) {
    this.logger.error(error);
    throw new Error('Unexpected error occurred');
  }
}
