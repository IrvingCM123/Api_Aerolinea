import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateFabricanteDto } from './dto/create-fabricante.dto';
import { UpdateFabricanteDto } from './dto/update-fabricante.dto';
import { Fabricante } from './entities/fabricante.entity';

@Injectable()
export class FabricantesService {
  private readonly logger = new Logger('FabricantesService');

  constructor(
    @InjectRepository(Fabricante)
    private readonly fabricanteRepository: Repository<Fabricante>,
  ) {}

  async create(createFabricanteDto: CreateFabricanteDto) {
    try {
      const fabricante = this.fabricanteRepository.create(createFabricanteDto);
      await this.fabricanteRepository.save(fabricante);
      return fabricante;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.fabricanteRepository.find();
  }

  async findOne(id: number | FindOneOptions<Fabricante>) {
    const options: FindOneOptions<Fabricante> =
      typeof id === 'number' ? { where: { id } } : id;
    const fabricante = await this.fabricanteRepository.findOne(options);
    if (!fabricante) {
      if (typeof id === 'number') {
        throw new NotFoundException(`Fabricante with ID ${id} not found`);
      } else {
        throw new NotFoundException(`Fabricante not found`);
      }
    }
    return fabricante;
  }

  async update(id: number, updateFabricanteDto: UpdateFabricanteDto) {
    const fabricante = await this.findOne(id);
    this.fabricanteRepository.merge(fabricante, updateFabricanteDto);
    return await this.fabricanteRepository.save(fabricante);
  }

  async remove(id: number) {
    const fabricante = await this.findOne(id);
    return await this.fabricanteRepository.remove(fabricante);
  }

  private handleDBExceptions(error: any) {
    this.logger.error(error);
    throw new Error('Unexpected error occurred');
  }
}
