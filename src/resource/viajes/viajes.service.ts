import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';
import { Viaje } from './entities/viaje.entity';

@Injectable()
export class ViajesService {
  private readonly logger = new Logger('ViajesServices');

  constructor(
    @InjectRepository(Viaje)
    private readonly viajeRepository: Repository<Viaje>,
  ) {}

  async create(createViajeDto: CreateViajeDto) {
    try {
      const viaje = this.viajeRepository.create(createViajeDto);
      await this.viajeRepository.save(viaje);
      return viaje;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.viajeRepository.find();
  }

  async findOne(id: number | FindOneOptions<Viaje>) {
    const options: FindOneOptions<Viaje> =
      typeof id === 'number' ? { where: { id } } : id;
    const viaje = await this.viajeRepository.findOne(options);
    if (!viaje) {
      if (typeof id === 'number') {
        throw new NotFoundException(`Viaje
         with ID ${id} not found`);
      } else {
        throw new NotFoundException(`Viaje not found`);
      }
    }
    return viaje;
  }

  async update(id: number, updateViajeDto: UpdateViajeDto) {
    const viaje = await this.findOne(id);
    this.viajeRepository.merge(viaje, updateViajeDto);
    return await this.viajeRepository.save(viaje);
  }

  async remove(id: number) {
    const viaje = await this.findOne(id);
    return await this.viajeRepository.remove(viaje);
  }

  private handleDBExceptions(error: any) {
    this.logger.error(error);
    throw new Error('Unexpected error occurred');
  }
}
