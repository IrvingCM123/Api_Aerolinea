import { TipoAeropuerto } from 'src/common/enums/tipo_aeropuerto.enum';

interface Aeropuerto {
  aeropuerto_Nombre: string;
  aeropuerto_Tipo: Tipo_Aeropuerto;
  aeropuerto_Ubicacion: number;
}

type Tipo_Aeropuerto = TipoAeropuerto;

interface SeedAeropuertos {
  aeropuertos: Aeropuerto[];
}

export const initialAeropuertos: SeedAeropuertos = {
  aeropuertos: [
    {
      aeropuerto_Nombre: 'Aeropuerto Internacional John F. Kennedy',
      aeropuerto_Tipo: TipoAeropuerto.INTERNACIONAL,
      aeropuerto_Ubicacion: 1,
    },
    {
      aeropuerto_Nombre: 'Aeropuerto Internacional de Heathrow',
      aeropuerto_Tipo: TipoAeropuerto.INTERNACIONAL,
      aeropuerto_Ubicacion: 2,
    },
    {
      aeropuerto_Nombre: 'Aeropuerto Nacional de Brasilia',
      aeropuerto_Tipo: TipoAeropuerto.NACIONAL,
      aeropuerto_Ubicacion: 3,
    },
    {
      aeropuerto_Nombre: 'Aeropuerto Internacional de Narita',
      aeropuerto_Tipo: TipoAeropuerto.INTERNACIONAL,
      aeropuerto_Ubicacion: 4,
    },
    {
      aeropuerto_Nombre: 'Aeropuerto de Tegel',
      aeropuerto_Tipo: TipoAeropuerto.INTERNACIONAL,
      aeropuerto_Ubicacion: 5,
    },
    {
      aeropuerto_Nombre: 'Aeropuerto El Dorado',
      aeropuerto_Tipo: TipoAeropuerto.INTERNACIONAL,
      aeropuerto_Ubicacion: 6,
    },
    {
      aeropuerto_Nombre: 'Aeropuerto Internacional de Los Ángeles',
      aeropuerto_Tipo: TipoAeropuerto.INTERNACIONAL,
      aeropuerto_Ubicacion: 7,
    },
    {
      aeropuerto_Nombre: 'Aeropuerto de Congonhas',
      aeropuerto_Tipo: TipoAeropuerto.NACIONAL,
      aeropuerto_Ubicacion: 8,
    },
    {
      aeropuerto_Nombre: 'Aeropuerto de Barajas',
      aeropuerto_Tipo: TipoAeropuerto.INTERNACIONAL,
      aeropuerto_Ubicacion: 9,
    },
    {
      aeropuerto_Nombre: 'Aeropuerto de Gatwick',
      aeropuerto_Tipo: TipoAeropuerto.INTERNACIONAL,
      aeropuerto_Ubicacion: 10,
    },
  ],
};
