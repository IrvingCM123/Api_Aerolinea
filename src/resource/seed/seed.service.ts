import { Injectable } from '@nestjs/common';
import { TrabajadoresService } from '../trabajadores/trabajadores.service';
import { UbicacionesService } from '../ubicaciones/ubicaciones.service';
import { AvionesService } from '../aviones/aviones.service';
import { AeropuertosService } from '../aeropuertos/aeropuertos.service';
import { TripulacionesService } from '../tripulaciones/tripulaciones.service';
import { VuelosService } from '../vuelos/vuelos.service';

import {
  initialAeropuertos,
  initialAviones,
  initialTarifasClase,
  initialTarifasDistancia,
  initialTrabajadores,
  initialTripulaciones,
  initialUbicaciones,
  initialVuelos,
} from './data/seeds';
import { TarifaClaseService } from '../tarifas-clase/tarifas-clase.service';
import { TarifaDistanciaService } from '../tarifas-distancia/tarifa-distancia.service';

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
    private readonly vuelosService: VuelosService,
  ) {}

  async runSeed() {
    await this.insertTrabajadores();
    await this.insertUbicaciones();
    await this.insertAviones();
    await this.insertAeropuertos();
    await this.insertTripulaciones();
    await this.insertTarifasClase();
    await this.insertTarifasDistancia();
    await this.insertVuelos();
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

  private async insertAviones() {
    const aviones = initialAviones.aviones;

    const insertPromises = [];

    aviones.forEach((avion) => {
      insertPromises.push(this.avionesService.create(avion));
    });
  }

  private async insertAeropuertos() {
    const aeropuertos = initialAeropuertos.aeropuertos;

    const insertPromises = [];

    aeropuertos.forEach((aeropuerto) => {
      insertPromises.push(this.aeropuertosService.create(aeropuerto));
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

  private async insertVuelos() {
    const vuelos = initialVuelos.vuelos;

    const insertPromises = [];

    vuelos.forEach((vuelo) => {
      insertPromises.push(this.vuelosService.create(vuelo));
    });
  }
}
