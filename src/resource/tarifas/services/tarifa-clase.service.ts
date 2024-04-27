import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TransaccionService } from 'src/common/transaction/transaccion.service';
import { Tipo_Transaccion } from 'src/common/enums/tipo_Transaccion.enum';
import {
  Errores_Operaciones,
  Exito_Operaciones,
} from 'src/common/helpers/operaciones.helpers';
import { Estado_Logico } from '../../../common/enums/estado_logico.enum';
import { TarifaClase } from '../entities/tarifa-clase.entity';
import { CreateTarifaClaseDto } from '../dto/create/create-tarifa-clase.dto';
import { UpdateTarifaClaseDto } from '../dto/update/update-tarifa-clase.dto';

@Injectable()
export class TarifaClaseService {
  constructor(
    private transaccionservice: TransaccionService,
    @InjectRepository(TarifaClase)
    private readonly tarifaClaseRepository: Repository<TarifaClase>,
  ) {}

  create(createTarifaClaseDto: CreateTarifaClaseDto) {
    const tarifaClase_Creado: any = this.transaccionservice.transaction(
      Tipo_Transaccion.Guardar,
      TarifaClase,
      createTarifaClaseDto,
    );

    if (tarifaClase_Creado == 'Error') {
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
    return this.tarifaClaseRepository.find();
  }

  async findbyName(nombre: string) {
    const tarifaClase_Buscar = await this.transaccionservice.transaction(
      Tipo_Transaccion.Consultar_Con_Parametros,
      TarifaClase,
      '',
      'tarifa_Clase_Nombre',
      nombre,
    );

    if (tarifaClase_Buscar == 'Error') {
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

  async update(id: number, updateTarifaClaseDto: UpdateTarifaClaseDto) {
    const tarifaClase_Actualzizar = await this.transaccionservice.transaction(
      Tipo_Transaccion.Actualizar,
      TarifaClase,
      updateTarifaClaseDto,
      'tarifa_Clase_Id',
      id.toString(),
    );

    if (tarifaClase_Actualzizar == 'Error') {
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
    const tarifaClase_Eliminar: any = await this.transaccionservice.transaction(
      Tipo_Transaccion.Actualizar_Con_Parametros,
      TarifaClase,
      Estado_Logico.ELIMINADO,
      'tarifa_Clase_Estado',
      id.toString(),
    );

    if (tarifaClase_Eliminar == 'Error') {
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
