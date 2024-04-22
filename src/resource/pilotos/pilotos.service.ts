import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreatePilotoDto } from './dto/create-piloto.dto';
import { UpdatePilotoDto } from './dto/update-piloto.dto';
import { Piloto } from './entities/piloto.entity';

@Injectable()
export class PilotosService {
  private readonly logger = new Logger('PilotosService');

  constructor(
    @InjectRepository(Piloto)
    private readonly pilotosRepository: Repository<Piloto>,
  ) {}

  async create(createPilotosDto: CreatePilotoDto) {
    try {
      const piloto = this.pilotosRepository.create(createPilotosDto);
      await this.pilotosRepository.save(piloto);
      return piloto;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.pilotosRepository.find();
  }

  async findOne(id: number | FindOneOptions<Piloto>) {
    const options: FindOneOptions<Piloto> =
      typeof id === 'number' ? { where: { id } } : id;
    const piloto = await this.pilotosRepository.findOne(options);
    if (!piloto) {
      if (typeof id === 'number') {
        throw new NotFoundException(`Piloto with ID ${id} not found`);
      } else {
        throw new NotFoundException(`Piloto not found`);
      }
    }
    return piloto;
  }

  async update(id: number, updatePilotoDto: UpdatePilotoDto) {
    const piloto = await this.findOne(id);
    this.pilotosRepository.merge(piloto, updatePilotoDto);
    return await this.pilotosRepository.save(piloto);
  }

  async remove(id: number) {
    const piloto = await this.findOne(id);
    return await this.pilotosRepository.remove(piloto);
  }

  private handleDBExceptions(error: any) {
    this.logger.error(error);
    throw new Error('Unexpected error occurred');
  }
}
