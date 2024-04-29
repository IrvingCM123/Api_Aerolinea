import { EstadoOperativo } from 'src/common/enums/estado-operativo.enum';
import { EstadoLogico } from 'src/common/enums/estado-logico.enum';

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

type Estado_Operativo = EstadoOperativo;
type Estado_Logico = EstadoLogico;

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
      avion_Estado_Operativo: EstadoOperativo.OPERATIVO,
      avion_Estado_Logico: EstadoLogico.ACTIVO,
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
      avion_Estado_Operativo: EstadoOperativo.MANTENIMIENTO,
      avion_Estado_Logico: EstadoLogico.INACTIVO,
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
      avion_Estado_Operativo: EstadoOperativo.MANTENIMIENTO,
      avion_Estado_Logico: EstadoLogico.ACTIVO,
      avion_Tipo_Motor: 'Turbina',
      avion_Autonomia: '1100 km',
    },
  ],
};
