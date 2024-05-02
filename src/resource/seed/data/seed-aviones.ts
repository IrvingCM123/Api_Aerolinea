import { ESTADO_OPERATIVO } from 'src/common/enums/estado-operativo.enum';
import { Estado_Logico } from 'src/common/enums/estado_logico.enum';

interface Avion {
  modeloAvionId: number;
  fabricanteId: number;
  avion_Capacidad_Pasajeros: number;
  avion_Capacidad_Carga: number;
  avion_Velocidad_Maxima: number;
  avion_Anio_Fabricacion: number;
  avion_Estado_Operativo: Estado_Operativo;
  avion_Estado_Logico: Estado_Logico;
  avion_Tipo_Motor: string;
  avion_Autonomia: string;
}

type Estado_Operativo = ESTADO_OPERATIVO;
type EstadoLogico = Estado_Logico;

interface SeedAviones {
  aviones: Avion[];
}

export const initialAviones: SeedAviones = {
  aviones: [
    {
      modeloAvionId: 1,
      fabricanteId: 1,
      avion_Capacidad_Pasajeros: 150,
      avion_Capacidad_Carga: 2000,
      avion_Velocidad_Maxima: 900,
      avion_Anio_Fabricacion: 2018,
      avion_Estado_Operativo: ESTADO_OPERATIVO.OPERATIVO,
      avion_Estado_Logico: Estado_Logico.ACTIVO,
      avion_Tipo_Motor: 'Turbina',
      avion_Autonomia: '1000 km',
    },
    {
      modeloAvionId: 2,
      fabricanteId: 2,
      avion_Capacidad_Pasajeros: 200,
      avion_Capacidad_Carga: 2500,
      avion_Velocidad_Maxima: 850,
      avion_Anio_Fabricacion: 2019,
      avion_Estado_Operativo: ESTADO_OPERATIVO.MANTENIMIENTO,
      avion_Estado_Logico: Estado_Logico.INACTIVO,
      avion_Tipo_Motor: 'Turbina',
      avion_Autonomia: '1200 km',
    },
    {
      modeloAvionId: 3,
      fabricanteId: 3,
      avion_Capacidad_Pasajeros: 180,
      avion_Capacidad_Carga: 2200,
      avion_Velocidad_Maxima: 920,
      avion_Anio_Fabricacion: 2020,
      avion_Estado_Operativo: ESTADO_OPERATIVO.MANTENIMIENTO,
      avion_Estado_Logico: Estado_Logico.ACTIVO,
      avion_Tipo_Motor: 'Turbina',
      avion_Autonomia: '1100 km',
    },
    {
      modeloAvionId: 4,
      fabricanteId: 4,
      avion_Capacidad_Pasajeros: 160,
      avion_Capacidad_Carga: 2100,
      avion_Velocidad_Maxima: 910,
      avion_Anio_Fabricacion: 2021,
      avion_Estado_Operativo: ESTADO_OPERATIVO.OPERATIVO,
      avion_Estado_Logico: Estado_Logico.ACTIVO,
      avion_Tipo_Motor: 'Turbina',
      avion_Autonomia: '1050 km',
    },
    {
      modeloAvionId: 5,
      fabricanteId: 5,
      avion_Capacidad_Pasajeros: 190,
      avion_Capacidad_Carga: 2400,
      avion_Velocidad_Maxima: 880,
      avion_Anio_Fabricacion: 2017,
      avion_Estado_Operativo: ESTADO_OPERATIVO.OPERATIVO,
      avion_Estado_Logico: Estado_Logico.INACTIVO,
      avion_Tipo_Motor: 'Turbina',
      avion_Autonomia: '1150 km',
    },
    {
      modeloAvionId: 6,
      fabricanteId: 6,
      avion_Capacidad_Pasajeros: 170,
      avion_Capacidad_Carga: 2300,
      avion_Velocidad_Maxima: 890,
      avion_Anio_Fabricacion: 2016,
      avion_Estado_Operativo: ESTADO_OPERATIVO.MANTENIMIENTO,
      avion_Estado_Logico: Estado_Logico.ACTIVO,
      avion_Tipo_Motor: 'Turbina',
      avion_Autonomia: '1080 km',
    },
    {
      modeloAvionId: 7,
      fabricanteId: 7,
      avion_Capacidad_Pasajeros: 155,
      avion_Capacidad_Carga: 2150,
      avion_Velocidad_Maxima: 930,
      avion_Anio_Fabricacion: 2015,
      avion_Estado_Operativo: ESTADO_OPERATIVO.MANTENIMIENTO,
      avion_Estado_Logico: Estado_Logico.ACTIVO,
      avion_Tipo_Motor: 'Turbina',
      avion_Autonomia: '1100 km',
    },
    {
      modeloAvionId: 8,
      fabricanteId: 8,
      avion_Capacidad_Pasajeros: 180,
      avion_Capacidad_Carga: 2200,
      avion_Velocidad_Maxima: 920,
      avion_Anio_Fabricacion: 2022,
      avion_Estado_Operativo: ESTADO_OPERATIVO.OPERATIVO,
      avion_Estado_Logico: Estado_Logico.INACTIVO,
      avion_Tipo_Motor: 'Turbina',
      avion_Autonomia: '1150 km',
    },
    {
      modeloAvionId: 9,
      fabricanteId: 9,
      avion_Capacidad_Pasajeros: 165,
      avion_Capacidad_Carga: 2250,
      avion_Velocidad_Maxima: 900,
      avion_Anio_Fabricacion: 2023,
      avion_Estado_Operativo: ESTADO_OPERATIVO.MANTENIMIENTO,
      avion_Estado_Logico: Estado_Logico.ACTIVO,
      avion_Tipo_Motor: 'Turbina',
      avion_Autonomia: '1120 km',
    },
    {
      modeloAvionId: 10,
      fabricanteId: 10,
      avion_Capacidad_Pasajeros: 200,
      avion_Capacidad_Carga: 2000,
      avion_Velocidad_Maxima: 920,
      avion_Anio_Fabricacion: 2024,
      avion_Estado_Operativo: ESTADO_OPERATIVO.OPERATIVO,
      avion_Estado_Logico: Estado_Logico.INACTIVO,
      avion_Tipo_Motor: 'Turbina',
      avion_Autonomia: '1200 km',
    },
  ],
};
