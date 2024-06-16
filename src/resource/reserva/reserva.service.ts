import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Reserva } from './entities/reserva.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

import { TransaccionService } from 'src/common/transaction/transaccion.service';
import { Tipo_Transaccion } from 'src/common/enums/tipo_Transaccion.enum';
import { Estado_Logico } from 'src/common/enums/estado_logico.enum';
import {
  Errores_Operaciones,
  Exito_Operaciones,
} from 'src/common/helpers/operaciones.helpers';

@Injectable()
export class ReservaService {
  private readonly logger = new Logger('ReservaService');

  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
    private transaccionService: TransaccionService,
  ) {}

  // Método para crear una nueva reserva
  async create(createReservaDto: CreateReservaDto) {
    // Utilizar el servicio de transacción para guardar la reserva en la base de datos
    const reserva_Creada = await this.transaccionService.transaction(
      Tipo_Transaccion.Guardar,
      Reserva,
      createReservaDto,
    );

    // Manejar la respuesta de la transacción
    if (reserva_Creada == 'Error') {
      return {
        status: 400,
        message: Errores_Operaciones.EROR_CREAR,
      };
    } else {
      return {
        status: 201,
        message: Exito_Operaciones.Crear,
      };
    }
  }

  // Método para encontrar todas las reservas
  async findAll() {
    return await this.reservaRepository.find();
  }

  // Método para encontrar una reserva por su ID
  async findOne(reserva_ID: number | FindOneOptions<Reserva>) {
    const options: FindOneOptions<Reserva> =
      typeof reserva_ID === 'number' ? { where: { reserva_ID } } : reserva_ID;
    const reserva = await this.reservaRepository.findOne(options);
    if (!reserva) {
      if (typeof reserva_ID === 'number') {
        throw new NotFoundException(`Reserva with ID ${reserva_ID} not found`);
      } else {
        throw new NotFoundException(`Reserva not found`);
      }
    }
    return reserva;
  }

  // Método para actualizar una reserva
  async update(id: number, updateReservaDto: UpdateReservaDto) {
    // Utilizar el servicio de transacción para actualizar la reserva en la base de datos
    const reserva_Modificar = await this.transaccionService.transaction(
      Tipo_Transaccion.Actualizar,
      Reserva,
      updateReservaDto,
      '',
      id.toString(),
    );

    // Manejar la respuesta de la transacción
    if (reserva_Modificar == 'Error') {
      return {
        status: 400,
        message: Errores_Operaciones.ERROR_ACTUALIZAR,
      };
    } else {
      return {
        status: 200,
        message: Exito_Operaciones.Actualizar,
      };
    }
  }

  // Método para eliminar una reserva
  async remove(id: number) {
    // Utilizar el servicio de transacción para eliminar la reserva de la base de datos
    const reserva_Eliminar = await this.transaccionService.transaction(
      Tipo_Transaccion.Actualizar_Con_Parametros,
      Reserva,
      Estado_Logico.ELIMINADO,
      'reserva_Estado_Logico',
      id.toString(),
    );

    // Manejar la respuesta de la transacción
    if (reserva_Eliminar == 'Error') {
      return {
        status: 400,
        message: Errores_Operaciones.ERROR_ELIMINAR,
      };
    } else {
      return {
        status: 200,
        message: Exito_Operaciones.Eliminar,
      };
    }
  }

  // Método privado para manejar excepciones de la base de datos
  private handleDBExceptions(error: any) {
    this.logger.error(error);
    throw new Error('Unexpected error occurred');
  }
}