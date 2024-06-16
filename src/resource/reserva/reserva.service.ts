import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Reserva } from './entities/reserva.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { BoletosService } from '../boleto/boleto.service';
import { TransaccionService } from 'src/common/transaction/transaccion.service';
import { Tipo_Transaccion } from 'src/common/enums/tipo_Transaccion.enum';
import { Estado_Logico } from 'src/common/enums/estado_logico.enum';
import { Errores_Operaciones, Exito_Operaciones } from 'src/common/helpers/operaciones.helpers';
import { CreateBoletoDto } from '../boleto/dto/create-boleto.dto';

@Injectable()
export class ReservaService {
  private readonly logger = new Logger('ReservaService');
  
  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
    private readonly boletosService: BoletosService,
    private readonly transaccionService: TransaccionService,
  ) {}

  async create(createReservaDto: CreateReservaDto) {
    this.logger.debug('Iniciando creación de reserva');
    const now = new Date();
    const expiration = new Date(now.getTime() + 5 * 60000); // 5 minutos después

    const reservaData = {
      ...createReservaDto,
      fechaReserva: now,
      fechaExpiracion: expiration,
    };

    this.logger.debug('Datos de la reserva:', reservaData);

    try {
      const reserva_Creada = await this.transaccionService.transaction(
        Tipo_Transaccion.Guardar,
        Reserva,
        reservaData,
      );

      if (!(reserva_Creada instanceof Reserva)) {
        throw new Error('Error al crear la reserva');
      }

      await this.createBoletos(reserva_Creada, createReservaDto.boletos);

      if (createReservaDto.viajeRedondo) {
        const reserva_CreadaRedonda = await this.transaccionService.transaction(
          Tipo_Transaccion.Guardar,
          Reserva,
          reservaData,
        );

        if (reserva_CreadaRedonda instanceof Reserva) {
          await this.createBoletos(reserva_CreadaRedonda, createReservaDto.boletos);
        }
      }

      return {
        status: 201,
        message: Exito_Operaciones.Crear,
      };
    } catch (error) {
      this.logger.error('Error al crear la reserva:', error.message);
      this.logger.error(error.stack);  // Agregar la pila de errores para más detalles
      return {
        status: 400,
        message: Errores_Operaciones.EROR_CREAR,
      };
    }
  }

  private async createBoletos(reserva: Reserva, boletos: CreateBoletoDto[]) {
    for (const boletoData of boletos) {
      const createBoletoDto = {
        ...boletoData,
        Usuario: reserva.Usuario.id_Usuario,
        Viaje: reserva.Vuelo.Vuelo_ID,
        Fecha_Compra: new Date(), // Convert to Date object
        reserva_ID: reserva.reserva_ID, // Asociar boleto con la reserva
      };
  
      this.logger.debug('Creando boleto con datos:', createBoletoDto);
  
      const result = await this.boletosService.create(createBoletoDto);
  
      if (result.status !== 201) {
        throw new Error(`Error al crear el boleto: ${result.message}`);
      }
  
      this.logger.debug('Resultado de la creación del boleto:', result);
    }
  }

  // Otros métodos...

  async findAll() {
    return await this.reservaRepository.find();
  }
  
  async findOne(reserva_ID: number) {
    try {
      const options: FindOneOptions<Reserva> = {
        where: { reserva_ID },
      };
      const reserva = await this.reservaRepository.findOneOrFail(options);
      return reserva;
    } catch (error) {
      throw new NotFoundException(`Reserva with ID ${reserva_ID} not found`);
    }
  }

  async update(id: number, updateReservaDto: UpdateReservaDto) {
    const reserva_Modificar = await this.transaccionService.transaction(
      Tipo_Transaccion.Actualizar,
      Reserva,
      updateReservaDto,
      '',
      id.toString(),
    );

    if (reserva_Modificar === 'Error') {
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

  async remove(id: number) {
    const reserva_Eliminar = await this.transaccionService.transaction(
      Tipo_Transaccion.Actualizar_Con_Parametros,
      Reserva,
      Estado_Logico.ELIMINADO,
      'reserva_Estado_Logico',
      id.toString(),
    );

    if (reserva_Eliminar === 'Error') {
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

  private handleDBExceptions(error: any) {
    this.logger.error(error);
    throw new Error('Unexpected error occurred');
  }
}
