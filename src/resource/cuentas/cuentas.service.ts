import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository, getConnection } from 'typeorm';
import { Cuenta } from './entities/cuenta.entity';

import { Errores_Cuentas, Exito_Cuentas } from 'src/common/helpers/cuentas.helpers';

import { Estado } from 'src/common/enums/cuentas.enum';
import * as bcrypt from 'bcrypt';
import { User_Interface } from 'src/common/interfaces/user.interface';
import { validateAdmin } from 'src/auth/guard/validateRole.guard';

import { TransaccionService } from 'src/common/transaction/transaccion.service';
import { Tipo_Transaccion } from 'src/common/enums/tipo_Transaccion.enum';

@Injectable()
export class CuentasService {

  constructor(
    @InjectRepository(Cuenta)
    private cuentaRepository: Repository<Cuenta>,
    private transaccionService: TransaccionService
  ) { }

  async create(createCuentaDto: CreateCuentaDto) {
    let cuenta_nueva = this.cuentaRepository.create(createCuentaDto);
    return this.cuentaRepository.save(cuenta_nueva);
  }

  findAll() {
    return this.cuentaRepository.find();
  }

  async findOneByEmail(identificador: string) {
    let buscar_cuenta = await this.cuentaRepository.findOne({
      where: { identificador: identificador },
    });

    if (buscar_cuenta) {
      let cuenta = {
        cuenta_ID: buscar_cuenta.id_cuenta,
        cuenta_Identificador: buscar_cuenta.identificador,
        cuenta_Contraseña: buscar_cuenta.contraseña,
        cuenta_Estado_Cuenta: buscar_cuenta.estado_cuenta,
        cuenta_Rol: buscar_cuenta.rol,
      };

      let info_usuario = buscar_cuenta.id_usuario;

      let usuario = {
        usuario_ID: info_usuario.id_usuario,
        usuario_Nombre: info_usuario.usuario_Nombre,
        usuario_Apellidos: info_usuario.usuario_Apellidos,
        usuario_Telefono: info_usuario.usuario_Telefono,
      };

      return { cuenta, usuario };
    } else {
      return Errores_Cuentas.CUENTA_NOT_FOUND, false;
    }
  }

  findOne(id: number) {
    try {
      return this.cuentaRepository.findOneById(id);
    } catch (error) {
      return Errores_Cuentas.CUENTA_NOT_FOUND;
    }
  }

  update(id: number, updateCuentaDto: UpdateCuentaDto) {
    return this.cuentaRepository.update(id, updateCuentaDto);
  }

  async actualizarEstadoCuenta(identificador: string, estado_cuenta: any) {

    const cuentaUsuario: any = await this.cuentaRepository.findOne({
      where: { identificador: identificador },
    });

    if (!cuentaUsuario) {
      throw new Error(Errores_Cuentas.CUENTA_NOT_FOUND);
      return;
    }

    const cuenta_ID = cuentaUsuario.id_cuenta;

    let resultato = await this.transaccionService.transaction(Tipo_Transaccion.Actualizar_Con_Parametros, Cuenta, estado_cuenta, 'estado_cuenta', cuenta_ID);

    if (resultato == 'Éxito') {
      return Exito_Cuentas.CUENTA_ACTUALIZADA;
    } else {
      return Errores_Cuentas.CUENTA_NOT_UPDATED;
    }
  }

  async activarCuenta(identificador: string, numero_activacion: string) {

    const cuentaUsuario: any = await this.cuentaRepository.findOne({
      where: { identificador: identificador },
    });

    if (!cuentaUsuario) {
      throw new Error(Errores_Cuentas.CUENTA_NOT_FOUND);
    }

    if (!(await bcrypt.compare(numero_activacion, cuentaUsuario.numero_activacion))) {
      throw new Error(Errores_Cuentas.NUMERO_ACTIVACION_NO_VALIDO);
    }

    const cuenta_ID = cuentaUsuario.id_cuenta;

    let resultado = await this.transaccionService.transaction(Tipo_Transaccion.Actualizar_Con_Parametros, Cuenta, Estado.ACTIVO, 'estado_cuenta', cuenta_ID);

    if (resultado == 'Éxito') {
      return Exito_Cuentas.CUENTA_ACTUALIZADA;
    } else {
      return Errores_Cuentas.CUENTA_NOT_UPDATED;
    }
  }

  async actualizarContraseña(identificador: string, contraseña: string) {

    const cuentaUsuario: any = await this.cuentaRepository.findOne({
      where: { identificador: identificador },
    });

    if (!cuentaUsuario) {
      throw new Error(Errores_Cuentas.CUENTA_NOT_FOUND);
    }

    const cuenta_ID = cuentaUsuario.id_cuenta;

    const hashedPassword = await bcrypt.hash(contraseña, 10);

    let resultado = await this.transaccionService.transaction(Tipo_Transaccion.Actualizar_Con_Parametros, Cuenta, hashedPassword, 'contraseña', cuenta_ID);

    if (resultado == 'Éxito') {
      return Exito_Cuentas.CONTRASEÑA_ACTUALIZADA;
    } else {
      return Errores_Cuentas.CONTRASEÑA_NO_ACTUALIZADA;
    }
  }

  async remove(identificador: string, user: User_Interface) {
    validateAdmin(user);

    const cuentaUsuario: any = await this.cuentaRepository.findOne({
      where: { identificador: identificador },
    });

    if (!cuentaUsuario) {
      throw new Error(Errores_Cuentas.CUENTA_NOT_FOUND);
    }

    const cuenta_ID = cuentaUsuario.id_cuenta;

    let resultado = await this.transaccionService.transaction(Tipo_Transaccion.Actualizar_Con_Parametros, Cuenta, Estado.ELIMINADO, 'estado_cuenta', cuenta_ID);

    if (resultado == 'Éxito') {
      return Exito_Cuentas.CUENTA_ELIMINADA;
    } else {
      return Errores_Cuentas.CUENTA_NO_ELIMINADA;
    }
  }
}
