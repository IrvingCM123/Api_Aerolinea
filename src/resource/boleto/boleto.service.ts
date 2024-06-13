import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';
import { Boleto } from './entities/boleto.entity';
import { TransaccionService } from '../../common/transaction/transaccion.service';
import { Tipo_Transaccion } from '../../common/enums/tipo_Transaccion.enum';
import {
  Errores_Operaciones,
  Exito_Operaciones,
} from '../../common/helpers/operaciones.helpers';
import { Estado_Logico } from '../../common/enums/estado_logico.enum';

@Injectable()
export class BoletosService {
  private readonly logger = new Logger('BoletosService');

  constructor(
    private transaccionService: TransaccionService,
    @InjectRepository(Boleto)
    private readonly boletoRepository: Repository<Boleto>,
  ) {}

  async create(createBoletoDto: CreateBoletoDto) {
    const boleto_Creado = await this.transaccionService.transaction(
      Tipo_Transaccion.Guardar,
      Boleto,
      createBoletoDto,
    );

    if (boleto_Creado === 'Error') {
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

  async findAll() {
    return await this.boletoRepository.find();
  }

  async findOne(id: number) {
    const boleto = await this.boletoRepository.findOne({
      where: { Boleto_ID: id },
    });
    if (!boleto) {
      throw new NotFoundException(`Boleto with ID ${id} not found`);
    }
    return boleto;
  }

  async update(id: number, updateBoletoDto: UpdateBoletoDto) {
    const boleto_Actualizar = await this.transaccionService.transaction(
      Tipo_Transaccion.Actualizar,
      Boleto,
      updateBoletoDto,
      '',
      id.toString(),
    );

    if (boleto_Actualizar === 'Error') {
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
    const boleto_Eliminar = await this.transaccionService.transaction(
      Tipo_Transaccion.Actualizar_Con_Parametros,
      Boleto,
      Estado_Logico.ELIMINADO,
      'Boleto_Estado',
      id.toString(),
    );

    if (boleto_Eliminar === 'Error') {
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
