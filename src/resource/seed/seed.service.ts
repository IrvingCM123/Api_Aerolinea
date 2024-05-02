import { Connection, DataSourceOptions } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { TrabajadoresService } from '../trabajadores/trabajadores.service';
import { UbicacionesService } from '../ubicaciones/ubicaciones.service';
import { AvionesService } from '../aviones/aviones.service';
import { AeropuertosService } from '../aeropuertos/aeropuertos.service';
import { TripulacionesService } from '../tripulaciones/tripulaciones.service';
import { VuelosService } from '../vuelos/vuelos.service';

import { TransaccionService } from 'src/common/transaction/transaccion.service';
import { Tipo_Transaccion } from 'src/common/enums/tipo_Transaccion.enum';
import { registrarAeropuertos } from './data/seed-aeropuerto';

import {
  initialTarifasDistancia,
  initialTrabajadores,
  initialTripulaciones,
  initialUbicaciones,
  initialVuelos,
} from './data/seeds';
import { TarifaClaseService } from '../tarifas-clase/tarifas-clase.service';
import { TarifaDistanciaService } from '../tarifas-distancia/tarifa-distancia.service';
import { FabricantesService } from '../fabricantes/fabricantes.service';
import { PilotosService } from '../pilotos/pilotos.service';
import { ModelosService } from '../modelos/modelos.service';
import { Ubicacion } from '../ubicaciones/entities/ubicacion.entity';
import { Aeropuerto } from '../aeropuertos/entities/aeropuerto.entity';
import { Fabricante } from '../fabricantes/entities/fabricante.entity';
import { ModeloAvion } from '../modelos/entities/modelo-avion.entity';
import { registrarAviones } from './data/seed-aviones';
import { Avion } from '../aviones/entities/avion.entity';
import { registrarFabricantes } from './data/seed-fabricante';
import { registrarModelosAvion } from './data/seed-modelo';
import { registrar_Pilotos } from './data/seed-pilotos';
import { Piloto } from '../pilotos/entities/piloto.entity';
import { registrar_Tarifa_Clase } from './data/seed-tarifaClase';
import { TarifaClase } from '../tarifas-clase/entities/tarifa-clase.entity';

@Injectable()
export class SeedService {
  constructor(
    private readonly trabajadoresService: TrabajadoresService,
    private readonly ubicacionesService: UbicacionesService,
    private readonly tripulacionesService: TripulacionesService,
    private readonly tarifasDistanciaService: TarifaDistanciaService,
    public transaccionService: TransaccionService,
  ) { }

  async runSeed() {
    await this.insertTrabajadores();
    await this.insertUbicaciones();
    await this.insertFabricantes();
    await this.insertModelos();

    await this.insertPilotos();
    await this.insertAviones();
    await this.insertAeropuertos();
    await this.insertTripulaciones();
    await this.insertTarifasClase();
    await this.insertTarifasDistancia();
    //await this.insertVuelos();
    return 'SEED EXECUTED';
  }

  private async insertTrabajadores() {
    const trabajadores = initialTrabajadores.trabajadores;

    const insertPromises = [];

    trabajadores.forEach((trabajador) => {
      insertPromises.push(this.trabajadoresService.create(trabajador));
    });
  }

  private async insertUbicaciones() {
    const ubicaciones = initialUbicaciones.ubicaciones;

    const insertPromises = [];

    ubicaciones.forEach((ubicacion) => {
      insertPromises.push(this.ubicacionesService.create(ubicacion));
    });
  }

  async insertFabricantes() {
    const fabricantes_Creados = registrarFabricantes();

    fabricantes_Creados.forEach(async (fabricante) => {
      await this.transaccionService.transaction(Tipo_Transaccion.Guardar, Fabricante, fabricante);
    });
  }

  async insertPilotos() {
    const pilotos = registrar_Pilotos();

    pilotos.forEach(async (piloto) => {
      await this.transaccionService.transaction(Tipo_Transaccion.Guardar, Piloto, piloto);
    });

  }

  async insertAviones() {

    const fabricantes_Array = await this.consultar_Fabricantes();

    const modelos_Array = await this.consultar_Modelos();

    const aviones_Creados = registrarAviones(fabricantes_Array, modelos_Array);

    aviones_Creados.forEach(async (avion) => {
      await this.transaccionService.transaction(Tipo_Transaccion.Guardar, Avion, avion);
    });

  }

  async insertAeropuertos() {

    const ubicaciones_Array = await this.consultar_Ubicaciones();

    const aeropuertos: any = registrarAeropuertos(ubicaciones_Array);

    aeropuertos.forEach(async (aeropuerto) => {
      await this.transaccionService.transaction(Tipo_Transaccion.Guardar, Aeropuerto, aeropuerto);
    });

  }

  private async insertTripulaciones() {
    const tripulaciones = initialTripulaciones.tripulaciones;

    const insertPromises = [];

    tripulaciones.forEach((tripulacion) => {
      insertPromises.push(this.tripulacionesService.create(tripulacion));
    });
  }

  async insertTarifasClase() {
    const tarifasClase = registrar_Tarifa_Clase();

    tarifasClase.forEach(async (tarifaClase) =>
      await this.transaccionService.transaction(Tipo_Transaccion.Guardar, TarifaClase, tarifaClase)
    );
    
  }

  private async insertTarifasDistancia() {
    const tarifasDistancia = initialTarifasDistancia.tarifasDistancia;

    const insertPromises = [];

    tarifasDistancia.forEach((tarifaDistancia) => {
      insertPromises.push(this.tarifasDistanciaService.create(tarifaDistancia));
    });
  }

  async insertModelos() {
    const modelos = registrarModelosAvion();

    modelos.forEach(async (modelo) =>
      await this.transaccionService.transaction(Tipo_Transaccion.Guardar, ModeloAvion, modelo)
    );
  }

  //private async insertVuelos() {
  //  const vuelos = initialVuelos.vuelos;
  //
  //  const insertPromises = [];
  //
  //  vuelos.forEach((vuelo) => {
  //    insertPromises.push(this.vuelosService.create(vuelo));
  //  });
  //}

  private async consultar_Ubicaciones() {

    const ubicaciones: any = await this.transaccionService.transaction(Tipo_Transaccion.Consultar, Ubicacion, '');

    let array_ID = [];

    for (let i = 0; i < ubicaciones.length; i++) {
      array_ID.push(ubicaciones[i].ubicacion_Id);
    }

    return array_ID;
  }

  private async consultar_Fabricantes() {

    const fabricantes: any = await this.transaccionService.transaction(Tipo_Transaccion.Consultar, Fabricante, '');

    let array_ID = [];

    for (let i = 0; i < fabricantes.length; i++) {
      array_ID.push(fabricantes[i].fabricante_Id);
    }

    return array_ID;
  }

  private async consultar_Modelos() {

    const modelos: any = await this.transaccionService.transaction(Tipo_Transaccion.Consultar, ModeloAvion, '');

    let array_ID = [];

    for (let i = 0; i < modelos.length; i++) {
      array_ID.push(modelos[i].modelo_Avion_Id);
    }

    return array_ID;
  }


}