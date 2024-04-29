import { Estado_Viaje } from "src/common/enums/estado-viaje.enum";

interface Vuelo {
  avion_Id: number;
  fecha: Date; // Change type from string to Date
  piloto_Id: number;
  copiloto_Id: number;
  tripulacion_ID: number;
  horaSalida: string;
  pasajerosTotales: number;
  pasajerosApartados: number;
  estado: Estado_Viaje;
  tarifa_Clase_Id: number;
  tarifa_distancia_Id: number;
}

type EstadoViaje = Estado_Viaje;

interface SeedVuelos {
  vuelos: Vuelo[];
}

export const initialVuelos: SeedVuelos = {
  vuelos: [
    {
      avion_Id: 1,
      fecha: new Date('2024-05-01'), // Use Date constructor to create Date object
      piloto_Id: 1,
      copiloto_Id: 2,
      tripulacion_ID: 1,
      horaSalida: '08:00',
      pasajerosTotales: 150,
      pasajerosApartados: 100,
      estado: Estado_Viaje.POR_INICIAR,
      tarifa_Clase_Id: 1,
      tarifa_distancia_Id: 1,
    },
    {
      avion_Id: 2,
      fecha: new Date('2024-05-02'),
      piloto_Id: 3,
      copiloto_Id: 4,
      tripulacion_ID: 2,
      horaSalida: '10:30',
      pasajerosTotales: 200,
      pasajerosApartados: 150,
      estado: Estado_Viaje.POR_INICIAR,
      tarifa_Clase_Id: 2,
      tarifa_distancia_Id: 2,
    },
    {
      avion_Id: 3,
      fecha: new Date('2024-05-03'),
      piloto_Id: 5,
      copiloto_Id: 6,
      tripulacion_ID: 3,
      horaSalida: '12:45',
      pasajerosTotales: 180,
      pasajerosApartados: 120,
      estado: Estado_Viaje.POR_INICIAR,
      tarifa_Clase_Id: 3,
      tarifa_distancia_Id: 3,
    },
    {
      avion_Id: 4,
      fecha: new Date('2024-05-04'),
      piloto_Id: 7,
      copiloto_Id: 8,
      tripulacion_ID: 4,
      horaSalida: '15:20',
      pasajerosTotales: 220,
      pasajerosApartados: 180,
      estado: Estado_Viaje.POR_INICIAR,
      tarifa_Clase_Id: 1,
      tarifa_distancia_Id: 1,
    },
    {
      avion_Id: 5,
      fecha: new Date('2024-05-05'),
      piloto_Id: 9,
      copiloto_Id: 10,
      tripulacion_ID: 5,
      horaSalida: '18:10',
      pasajerosTotales: 190,
      pasajerosApartados: 130,
      estado: Estado_Viaje.POR_INICIAR,
      tarifa_Clase_Id: 2,
      tarifa_distancia_Id: 2,
    },
  ],
};
