import { Estado_Viaje } from 'src/common/enums/estado-viaje.enum';
import { Avion } from 'src/resource/aviones/entities/avion.entity';
import { Vuelo } from 'src/resource/vuelos/entities/vuelo.entity';
import { faker } from '@faker-js/faker';

interface Viaje {
  fechaSalida: Date;
  fechaLlegada: Date;
  duracion_vuelo_ms: number
  estadoViaje: Estado_Viaje;
  aeropuertoDestino: number;
  aeropuertoOrigen: number;
  vueloId: number;
}

interface SeedViajes {
  viajes: Viaje[];
}

export function registrarViajes(
  aeropuertos: any,
  vuelos: Vuelo[],
) {


  const arrayEstados = [
    Estado_Viaje.POR_INICIAR,
    Estado_Viaje.EN_CURSO,
    Estado_Viaje.FINALIZADO,
  ];

  const viajesGenerados = [];

  for (let i = 0; i < 100; i++) {
    const aeropuertoDestinoIndex = Math.floor(
      Math.random() * aeropuertos.length,
    );
    const aeropuertoDestino = aeropuertos[aeropuertoDestinoIndex];

    const aeropuertoOrigenIndex = Math.floor(
      Math.random() * aeropuertos.length,
    );
    const aeropuertoOrigen = aeropuertos[aeropuertoOrigenIndex];

    const vueloIndex = Math.floor(Math.random() * vuelos.length);
    const vuelo = vuelos[vueloIndex];

    const fechaSalida = faker.date.between(new Date(), faker.date.future());
    const duracionVueloMs = faker.number.int({ min: 3600000, max: 86400000 }); // Entre 1 hora y 24 horas en milisegundos


    const viaje: Viaje = {
      fechaSalida: fechaSalida,
      fechaLlegada: new Date(fechaSalida.getTime() + duracionVueloMs),
      duracion_vuelo_ms: duracionVueloMs,
      estadoViaje: faker.helpers.arrayElement(Object.values(Estado_Viaje)),
      aeropuertoDestino:
        aeropuertos[Math.floor(Math.random() * aeropuertos.length)].id,
      aeropuertoOrigen:
        aeropuertos[Math.floor(Math.random() * aeropuertos.length)].id,
      vueloId: vuelos[Math.floor(Math.random() * vuelos.length)].Vuelo_ID,
    };
    viajesGenerados.push(viaje);
  }
  return viajesGenerados;
}


