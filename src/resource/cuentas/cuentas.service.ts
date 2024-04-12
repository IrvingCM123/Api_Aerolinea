import { Injectable } from '@nestjs/common';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Cuenta } from './entities/cuenta.entity';

import { Errores_Cuentas, Exito_Cuentas } from 'src/common/helpers/cuentas.helpers';

import { Usuario } from 'src/resource/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/resource/usuario/usuario.service';
import { Estado } from 'src/common/enums/cuentas.enum';

@Injectable()
export class CuentasService {
  constructor(
    @InjectRepository(Cuenta)
    private cuentaRepository: Repository<Cuenta>,

  ) {}

  async create(createCuentaDto: CreateCuentaDto) {
    let cuenta_nueva = this.cuentaRepository.create(createCuentaDto);
    return this.cuentaRepository.save(cuenta_nueva);
  }

  findAll() {
    return this.cuentaRepository.find();
  }

  async findOneByEmail(identificador: string) {

    let buscar_cuenta = await this.cuentaRepository
      .createQueryBuilder('cuenta')
      .leftJoinAndSelect('cuenta.id_usuario', 'usuario')
      .where('cuenta.identificador = :identificador', { identificador })
      .getOne();

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

  actualizarEstadoCuenta(identificador: string, estado_cuenta: any) {
    return this.cuentaRepository
      .createQueryBuilder()
      .update(Cuenta)
      .set({ estado_cuenta: estado_cuenta.estado_cuenta })
      .where('identificador = :identificador', { identificador })
      .execute();
  }

  actualizarContraseña(identificador: string, contraseña: string) {
    return this.cuentaRepository
      .createQueryBuilder()
      .update(Cuenta)
      .set({ contraseña: contraseña })
      .where('identificador = :identificador', { identificador })
      .execute();
  }

  async remove(identificador: string) {
    try {
      const cuentaUsuario: any = await this.cuentaRepository
        .createQueryBuilder('cuenta')
        .leftJoinAndSelect('cuenta.id_usuario', 'usuario')
        .where('cuenta.identificador = :identificador', { identificador })
        .getOne();
  
      if (!cuentaUsuario) {
        throw new Error('La cuenta no se encontró.');
      }

      console.log(cuentaUsuario);
  
      await getConnection().transaction(async transactionalEntityManager => {
        await transactionalEntityManager.remove(cuentaUsuario.cuenta.id_usuario);
        await transactionalEntityManager.remove(cuentaUsuario);
      });
  
      return true; // Indicar que la eliminación fue exitosa
    } catch (error) {
      console.error('Error al eliminar cuenta y usuario:', error);
      return false; // Indicar que la eliminación falló
    }
  }
  
  
}
