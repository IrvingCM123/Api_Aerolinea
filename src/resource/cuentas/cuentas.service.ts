import { Injectable } from '@nestjs/common';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuenta } from './entities/cuenta.entity';

import { Errores_Cuentas, Exito_Cuentas } from 'src/common/enums/cuentas.enum';

import { Usuario } from 'src/resource/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/resource/usuario/usuario.service';

@Injectable()
export class CuentasService {
  constructor(
    @InjectRepository(Cuenta)
    private cuentaRepository: Repository<Cuenta>,

  ) {}

  async create(createCuentaDto: CreateCuentaDto) {
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
        id_cuenta: buscar_cuenta.id_cuenta,
        identificador: buscar_cuenta.identificador,
        contraseña: buscar_cuenta.contraseña,
        estado_cuenta: buscar_cuenta.estado_cuenta,
        rol: buscar_cuenta.rol,
      };

      let info_usuario = buscar_cuenta.id_usuario;

      let usuario = {
        id_usuario: info_usuario.id_usuario,
        name: info_usuario.name,
        lastname: info_usuario.lastname,
        phone: info_usuario.phone,
        address: info_usuario.address,
        role: info_usuario.rol,
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

  remove(id: number) {
    return this.cuentaRepository.delete(id);
  }
  
}
