import { Injectable } from '@nestjs/common';
import { CreateTarjetaDto } from './dto/create-tarjeta.dto';
import { UpdateTarjetaDto } from './dto/update-tarjeta.dto';
import { TransaccionService } from 'src/common/transaction/transaccion.service';
import { Tipo_Transaccion } from 'src/common/enums/tipo_Transaccion.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarjeta } from './entities/tarjeta.entity';
import { Repository } from 'typeorm';
import { Error_Tarjeta, Exito_Tarjetas } from 'src/common/helpers/tarjetas.helpers';
@Injectable()
export class TarjetaService {

  constructor(
    private transaccionService: TransaccionService,
    @InjectRepository(Tarjeta)
    private tarjetaRepository: Repository<Tarjeta>
  ) {}

  async create(createTarjetaDto: CreateTarjetaDto) {
    let resultado = await this.transaccionService.transaction(Tipo_Transaccion.Guardar, Tarjeta, createTarjetaDto);

    if (resultado != 'Éxito') {
      return {
        status: 400,
        message: Error_Tarjeta.ERROR_CREAR_TARJETA
      }
    } else {
      return {
        status: 201,
        message: Exito_Tarjetas
      }
    }
  }

  findAll() {
    return this.tarjetaRepository.find();
  }

  async findOne(id: number) {
    let buscar = await this.tarjetaRepository.findOneById(id);

    if (buscar == undefined || buscar == null) {
      return {
        status: 400,
        message: Error_Tarjeta.ERROR_TARJETA_NO_ENCONTRADA
      }
    } else {
      return {
        status: 201, 
        buscar
      }
    }
  }

  async update(id: number, updateTarjetaDto: UpdateTarjetaDto) {
    let resultado = await this.transaccionService.transaction(Tipo_Transaccion.Actualizar, Tarjeta, updateTarjetaDto);

    if (resultado == 'Éxito') {
      return {
        status: 201,
        message: Exito_Tarjetas.ACTUALIZAR_TARJETA
      }
    } else {
      return {
        status: 400,
        message: Error_Tarjeta.ERROR_TARJETA_NO_ACTUALIZADA
      }
    }
  }

  remove(id: number) {
    return `This action removes a #${id} tarjeta`;
  }
}
