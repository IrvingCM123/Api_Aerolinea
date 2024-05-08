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
import { Tripulacion } from '../tripulaciones/entities/tripulacion.entity';
import { Trabajador } from '../trabajadores/entities/trabajador.entity';
import { registrarTripulacion } from './data/seed-tripulaciones';

interface actualizar {
  ID_Tripulacion: number,
  trabajadores: number[]
}

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
    await this.insertTarifasClase();
    await this.insertTarifasDistancia();
    await this.insertTripulaciones();
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

  async insertTripulaciones() {

    const trabajadores_Array = await this.consultar_Trabajadores();

    const tripulaciones = await registrarTripulacion(trabajadores_Array);

    let tripulacionID: actualizar[] = [];

    for (let i = 0; i < tripulaciones.length; i++) {
      let resultado: any = await this.transaccionService.transaction(Tipo_Transaccion.Guardar, Tripulacion, tripulaciones[i]);
      const objeto = { ID_Tripulacion: resultado.resultado.tripulacion_ID, trabajadores: resultado.resultado.trabajadores };
      tripulacionID.push(objeto);
    }

    for (let i = 0; i < tripulacionID.length; i++) {
      for (let j = 0; j < tripulacionID[i].trabajadores.length; j++) {
        await this.transaccionService.transaction(Tipo_Transaccion.Actualizar_Con_Parametros, Trabajador, tripulacionID[i].ID_Tripulacion, 'tripulacion_ID', (tripulacionID[i].trabajadores[j]).toString());
      }
    }
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

  async consultar_Trabajadores() {

    const trabajadores: any = await this.transaccionService.transaction(Tipo_Transaccion.Consultar, Trabajador, '');

    let array_ID = [];

    for (let i = 0; i < trabajadores.length; i++) {
      array_ID.push(trabajadores[i].id);
    }

    return array_ID;
  }

  async consultar_Triuplacion() {

    const tripulaciones: any = await this.transaccionService.transaction(Tipo_Transaccion.Consultar, Tripulacion, '');

    let array_ID = [];

    for (let i = 0; i < tripulaciones.length; i++) {
      array_ID.push(tripulaciones[i]);
    }

    return array_ID;
  }

}