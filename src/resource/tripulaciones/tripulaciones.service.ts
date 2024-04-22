import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateTripulacionDto } from './dto/create-tripulacion.dto';
import { UpdateTripulacionDto } from './dto/update-tripulacion.dto';
import { Tripulacion } from './entities/tripulacion.entity';

@Injectable()
export class TripulacionesService {
  private readonly logger = new Logger('TripulacionesService');

  constructor(
    @InjectRepository(Tripulacion)
    private readonly tripulacionRepository: Repository<Tripulacion>,
  ) {}

  async create(createTripulacionDto: CreateTripulacionDto) {
    try {
      const tripulacion =
        this.tripulacionRepository.create(createTripulacionDto);
      await this.tripulacionRepository.save(tripulacion);
      return tripulacion;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.tripulacionRepository.find();
  }

  async findOne(id: number | FindOneOptions<Tripulacion>) {
    const options: FindOneOptions<Tripulacion> =
      typeof id === 'number' ? { where: { id } } : id;
    const tripulacion = await this.tripulacionRepository.findOne(options);
    if (!tripulacion) {
      if (typeof id === 'number') {
        throw new NotFoundException(`Tripulacion
         with ID ${id} not found`);
      } else {
        throw new NotFoundException(`Tripulacion not found`);
      }
    }
    return tripulacion;
  }

  async update(id: number, updateTripulacionDto: UpdateTripulacionDto) {
    const tripulacion = await this.findOne(id);
    this.tripulacionRepository.merge(tripulacion, updateTripulacionDto);
    return await this.tripulacionRepository.save(tripulacion);
  }

  async remove(id: number) {
    const tripulacion = await this.findOne(id);
    return await this.tripulacionRepository.remove(tripulacion);
  }

  private handleDBExceptions(error: any) {
    this.logger.error(error);
    throw new Error('Unexpected error occurred');
  }
}
