import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository, getConnection } from 'typeorm';
import { Cuenta } from './entities/cuenta.entity';

import { Errores_Cuentas, Exito_Cuentas } from 'src/common/helpers/cuentas.helpers';

import { Usuario } from 'src/resource/usuario/entities/usuario.entity';
import { Estado } from 'src/common/enums/cuentas.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CuentasService {
  constructor(
    @InjectRepository(Cuenta)
    private cuentaRepository: Repository<Cuenta>,
    private readonly connection: Connection,
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

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

    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const cuentaUsuario: any = await this.cuentaRepository.findOne({
        where: { identificador: identificador },
      });
  
      if (!cuentaUsuario) {
        await queryRunner.rollbackTransaction();
        throw new Error(Errores_Cuentas.CUENTA_NOT_FOUND);
      }

      const cuenta_ID = cuentaUsuario.id_cuenta;

      await queryRunner.manager.update(Cuenta, cuenta_ID , { estado_cuenta: estado_cuenta });

      await queryRunner.commitTransaction();

      return Exito_Cuentas.CUENTA_ACTUALIZADA;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return Errores_Cuentas.CUENTA_NOT_UPDATED;
    } finally {
      await queryRunner.release();
    }
  }

  async activarCuenta(identificador: string,  numero_activacion: string) {

    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const cuentaUsuario: any = await this.cuentaRepository.findOne({
        where: { identificador: identificador },
      });
  
      if (!cuentaUsuario) {
        await queryRunner.rollbackTransaction();
        throw new Error(Errores_Cuentas.CUENTA_NOT_FOUND);
      }

      if (!(await bcrypt.compare(numero_activacion, cuentaUsuario.numero_activacion))) {
        await queryRunner.rollbackTransaction();
        throw new Error(Errores_Cuentas.NUMERO_ACTIVACION_NO_VALIDO);
      }

      const cuenta_ID = cuentaUsuario.id_cuenta;

      await queryRunner.manager.update(Cuenta, cuenta_ID , { estado_cuenta: Estado.ACTIVO });

      await queryRunner.commitTransaction();

      return Exito_Cuentas.CUENTA_ACTUALIZADA;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return Errores_Cuentas.CUENTA_NOT_UPDATED;
    } finally {
      await queryRunner.release();
    }
  }

  async actualizarContraseña(identificador: string, contraseña: string) {

    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const cuentaUsuario: any = await this.cuentaRepository.findOne({
        where: { identificador: identificador },
      });
  
      if (!cuentaUsuario) {
        await queryRunner.rollbackTransaction();
        throw new Error(Errores_Cuentas.CUENTA_NOT_FOUND);
      }

      const cuenta_ID = cuentaUsuario.id_cuenta;

      const hashedPassword = await bcrypt.hash(contraseña, 10);

      await queryRunner.manager.update(Cuenta, cuenta_ID , { contraseña: hashedPassword });

      await queryRunner.commitTransaction();

      return Exito_Cuentas.CONTRASEÑA_ACTUALIZADA;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return Errores_Cuentas.CONTRASEÑA_NO_ACTUALIZADA;
    } finally {
      await queryRunner.release();
    }

  }

  async remove(identificador: string) {

    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const cuentaUsuario: any = await this.cuentaRepository.findOne({
        where: { identificador: identificador },
      });
  
      if (!cuentaUsuario) {
        await queryRunner.rollbackTransaction();
        throw new Error(Errores_Cuentas.CUENTA_NOT_FOUND);
      }

      const cuenta_ID = cuentaUsuario.id_cuenta;

      await queryRunner.manager.update(Cuenta, cuenta_ID , { estado_cuenta: Estado.ELIMINADO });

      await queryRunner.commitTransaction();

      return Exito_Cuentas.CUENTA_ELIMINADA;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return Errores_Cuentas.CUENTA_NO_ELIMINADA;
    } finally {
      await queryRunner.release();
    }
  }
}
