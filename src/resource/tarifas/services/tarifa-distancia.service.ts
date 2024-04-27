import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TransaccionService } from '../../../common/transaction/transaccion.service';
import { Tipo_Transaccion } from '../../../common/enums/tipo_Transaccion.enum';
import {
  Errores_Operaciones,
  Exito_Operaciones,
} from '../../../common/helpers/operaciones.helpers';
import { Estado_Logico } from '../../../common/enums/estado_logico.enum';
import { TarifaDistancia } from '../entities/tarifa-distancia.entity';
import { CreateTarifaDistanciaDto } from '../dto/create/create-tarifa-distancia.dto';
import { UpdateTarifaDistanciaDto } from '../dto/update/update-tarifa-distancia.dto';

@Injectable()
export class TarifaDistanciaService {
  constructor(
    private transaccionservice: TransaccionService,
    @InjectRepository(TarifaDistancia)
    private readonly tarifaDistanciaRepository: Repository<TarifaDistancia>,
  ) {}

  create(createTarifaDistanciaDto: CreateTarifaDistanciaDto) {
    const tarifaDistancia_Creado: any = this.transaccionservice.transaction(
      Tipo_Transaccion.Guardar,
      TarifaDistancia,
      createTarifaDistanciaDto,
    );

    if (tarifaDistancia_Creado == 'Error') {
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

  findAll() {
    return this.tarifaDistanciaRepository.find();
  }

  async findbyName(nombre: string) {
    const tarifaDistancia_Buscar = await this.transaccionservice.transaction(
      Tipo_Transaccion.Consultar_Con_Parametros,
      TarifaDistancia,
      '',
      'tarifa_Distancia_Nombre',
      nombre,
    );

    if (tarifaDistancia_Buscar == 'Error') {
      return {
        status: 400,
        message: Errores_Operaciones.ERROR_CONSULTAR,
      };
    } else {
      return {
        status: 200,
        message: Exito_Operaciones.Consultar,
      };
    }
  }

  async update(id: number, updateTarifaDistanciaDto: UpdateTarifaDistanciaDto) {
    const tarifaDistancia_Actualzizar =
      await this.transaccionservice.transaction(
        Tipo_Transaccion.Actualizar,
        TarifaDistancia,
        updateTarifaDistanciaDto,
        'tarifa_Clase_Id',
        id.toString(),
      );

    if (tarifaDistancia_Actualzizar == 'Error') {
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
    const tarifaDistancia_Eliminar: any =
      await this.transaccionservice.transaction(
        Tipo_Transaccion.Actualizar_Con_Parametros,
        TarifaDistancia,
        Estado_Logico.ELIMINADO,
        'tarifa_Clase_Estado',
        id.toString(),
      );

    if (tarifaDistancia_Eliminar == 'Error') {
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
}
