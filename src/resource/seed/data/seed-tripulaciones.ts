interface Tripulacion {
  nombre_Equipo: string;
  cantidad_Tripulantes: number;
  clase_Viaje: string;
  valoracion: number;
  trabajadorIds: number[];
}

interface SeedTripulaciones {
  tripulaciones: Tripulacion[];
}

export const initialTripulaciones: SeedTripulaciones = {
  tripulaciones: [
    {
      nombre_Equipo: 'Equipo A',
      cantidad_Tripulantes: 5,
      clase_Viaje: 'Económica',
      valoracion: 5,
      trabajadorIds: [1, 2],
    },
    {
      nombre_Equipo: 'Equipo B',
      cantidad_Tripulantes: 4,
      clase_Viaje: 'Primera Clase',
      valoracion: 5,
      trabajadorIds: [3, 4],
    },
    {
      nombre_Equipo: 'Equipo C',
      cantidad_Tripulantes: 3,
      clase_Viaje: 'Económica',
      valoracion: 5,
      trabajadorIds: [5, 6],
    },
  ],
};
