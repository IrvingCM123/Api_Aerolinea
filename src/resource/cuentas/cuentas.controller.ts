import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { Estado } from 'src/common/enums/cuentas.enum';
@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}

  @Post()
  create(@Body() createCuentaDto: CreateCuentaDto) {
    return this.cuentasService.create(createCuentaDto);
  }

  @Get()
  findAll() {
    return this.cuentasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuentasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuentaDto: UpdateCuentaDto) {
    return this.cuentasService.update(+id, updateCuentaDto);
  }

  @Patch('actualizarCuenta/:identificador')
  actualizarEstadoCuenta(@Param('identificador') identificador: string, @Body() estado_cuenta: Estado) {
    let estado: any = estado_cuenta;
    estado = estado.estado_cuenta;
    return this.cuentasService.actualizarEstadoCuenta(identificador, estado);
  }

  @Patch('activarCuenta/:identificador')
  activarCuenta(@Param('identificador') identificador: string, @Body() Datos: any) {
    let estado: any = Datos.estado_cuenta;
    let numero_activacion: any = Datos.numero_activacion;
    return this.cuentasService.activarCuenta(identificador, estado, numero_activacion);
  }

  @Patch('actualizarContraseña/:identificador')
  actualizarContraseña(@Param('identificador') identificador: string, @Body() contraseña: string) {
    let contrasena: any = contraseña;
    contraseña = contrasena.contraseña;
    return this.cuentasService.actualizarContraseña(identificador, contrasena);
  }

  @Delete(':identificador')
  remove(@Param('identificador') identificador: string) {
    return this.cuentasService.remove(identificador);
  }
}
