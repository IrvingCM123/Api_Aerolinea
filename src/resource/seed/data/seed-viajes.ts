import { Estado_Viaje } from 'src/common/enums/estado-viaje.enum';
import { Aeropuerto } from 'src/resource/aeropuertos/entities/aeropuerto.entity';
import { Avion } from 'src/resource/aviones/entities/avion.entity';
import { Vuelo } from 'src/resource/vuelos/entities/vuelo.entity';

interface Viaje {
  fechaSalida: Date;
  fechaLlegada: Date;
  estadoViaje: Estado_Viaje;
  numeroAvion: number;
  aeropuertoDestino: number;
  aeropuertoOrigen: number;
  vueloId: number;
}

interface SeedViajes {
  viajes: Viaje[];
}

export function registrarViajes(
  aviones: Avion[],
  aeropuertos: Aeropuerto[],
  vuelos: Vuelo[],
) {
  console.log('Aviones length:', aviones.length);
  console.log('Aeropuertos length:', aeropuertos.length);
  console.log('Vuelos length:', vuelos.length);

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
    console.log('Aeropuerto Destino:', aeropuertoDestino);

    const aeropuertoOrigenIndex = Math.floor(
      Math.random() * aeropuertos.length,
    );
    const aeropuertoOrigen = aeropuertos[aeropuertoOrigenIndex];
    console.log('Aeropuerto Origen:', aeropuertoOrigen);

    const vueloIndex = Math.floor(Math.random() * vuelos.length);
    const vuelo = vuelos[vueloIndex];
    console.log('Vuelo:', vuelo);

    console.log(aeropuertos[0]);

    const viaje: Viaje = {
      fechaSalida: generarFechas(),
      fechaLlegada: generarFechas(),
      estadoViaje:
        arrayEstados[Math.floor(Math.random() * arrayEstados.length)],
      numeroAvion: aviones[Math.floor(Math.random() * aviones.length)].avion_Id,
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

function generarFechas() {
  const startDate = new Date();
  const endDate = new Date(startDate);

  endDate.setDate(endDate.getDate() + Math.floor(Math.random() * 30));

  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime()),
  );

  return randomDate;
}
