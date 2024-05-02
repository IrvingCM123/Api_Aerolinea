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

let nombres_Aeropuertos = [
  'Aeropuerto Internacional John F. Kennedy',
  'Aeropuerto Internacional de Heathrow',
  'Aeropuerto Nacional de Brasilia',
  'Aeropuerto Internacional de Narita',
  'Aeropuerto de Tegel',
  'Aeropuerto El Dorado',
  'Aeropuerto Internacional de Los Ángeles',
  'Aeropuerto de Congonhas',
  'Aeropuerto de Barajas',
  'Aeropuerto de Gatwick',
];


export function registrarAeropuertos(ubicaciones: any) {

  const array_Ubicaciones = ubicaciones;

  const tipos_Aeropuertos = [TipoAeropuerto.INTERNACIONAL, TipoAeropuerto.NACIONAL, TipoAeropuerto.PRIVADO];

  const aeropuertos_Nombres = nombres_Aeropuertos;

  let aeropuertos_generados = [];

  for (let i = 0; i < 10; i++) {
    const aeropuerto: Aeropuerto = {
      aeropuerto_Nombre: aeropuertos_Nombres[i],
      aeropuerto_Tipo: tipos_Aeropuertos[Math.floor(Math.random() * tipos_Aeropuertos.length)],
      aeropuerto_Ubicacion: array_Ubicaciones[Math.floor(Math.random() * array_Ubicaciones.length)],
    };
    aeropuertos_generados.push(aeropuerto);
  }

  return aeropuertos_generados;
}
