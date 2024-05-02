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
  initialAviones,
  initialFabricantes,
  initialModelosAvion,
  initialPilotos,
  initialTarifasClase,
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

@Injectable()
export class SeedService {
  constructor(
    private readonly trabajadoresService: TrabajadoresService,
    private readonly ubicacionesService: UbicacionesService,
    private readonly avionesService: AvionesService,
    private readonly aeropuertosService: AeropuertosService,
    private readonly tripulacionesService: TripulacionesService,
    private readonly tarifasClaseService: TarifaClaseService,
    private readonly tarifasDistanciaService: TarifaDistanciaService,
    private readonly fabricanteService: FabricantesService,
    private readonly vuelosService: VuelosService,
    private readonly pilotosService: PilotosService,
    private readonly modelosService: ModelosService,
    public transaccionService: TransaccionService,
  ) { }

  async runSeed() {
    await this.insertTrabajadores();
    await this.insertUbicaciones();
    await this.insertAviones();
    await this.insertAeropuertos();
    await this.insertTripulaciones();
    await this.insertTarifasClase();
    await this.insertTarifasDistancia();
    await this.insertFabricantes();
    await this.insertPilotos();
    await this.insertModelos();
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

  private async insertFabricantes() {
    const fabricantes = initialFabricantes.fabricantes;

    const insertPromises = [];

    fabricantes.forEach((fabricante) => {
      insertPromises.push(this.fabricanteService.create(fabricante));
    });
  }

  private async insertPilotos() {
    const pilotos = initialPilotos.pilotos;

    const insertPromises = [];

    pilotos.forEach((piloto) => {
      insertPromises.push(this.pilotosService.create(piloto));
    });
  }

  private async insertAviones() {
    const aviones = initialAviones.aviones;

    const insertPromises = [];

    aviones.forEach((avion) => {
      insertPromises.push(this.avionesService.create(avion));
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

  private async insertTarifasClase() {
    const tarifasClase = initialTarifasClase.tarifasClase;

    const insertPromises = [];

    tarifasClase.forEach((tarifaClase) => {
      insertPromises.push(this.tarifasClaseService.create(tarifaClase));
    });
  }

  private async insertTarifasDistancia() {
    const tarifasDistancia = initialTarifasDistancia.tarifasDistancia;

    const insertPromises = [];

    tarifasDistancia.forEach((tarifaDistancia) => {
      insertPromises.push(this.tarifasDistanciaService.create(tarifaDistancia));
    });
  }

  private async insertModelos() {
    const modelos = initialModelosAvion.modelosAvion;

    const insertPromises = [];

    modelos.forEach((modelo) => {
      insertPromises.push(this.modelosService.create(modelo));
    });
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

  async consultar_Ubicaciones() {

    const ubicaciones: any = await this.transaccionService.transaction(Tipo_Transaccion.Consultar, Ubicacion, '');

    let array_ID = [];

    for (let i = 0; i < ubicaciones.length; i++) {
      array_ID.push(ubicaciones[i].ubicacion_Id);
    }

    return array_ID;
  }


}