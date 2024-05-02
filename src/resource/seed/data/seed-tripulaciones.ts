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
      trabajadorIds: [1, 2, 3, 4, 5],
    },
    {
      nombre_Equipo: 'Equipo B',
      cantidad_Tripulantes: 4,
      clase_Viaje: 'Primera Clase',
      valoracion: 5,
      trabajadorIds: [6, 7, 8, 9],
    },
    {
      nombre_Equipo: 'Equipo C',
      cantidad_Tripulantes: 3,
      clase_Viaje: 'Económica',
      valoracion: 5,
      trabajadorIds: [10, 1, 2],
    },
    {
      nombre_Equipo: 'Equipo D',
      cantidad_Tripulantes: 4,
      clase_Viaje: 'Business',
      valoracion: 5,
      trabajadorIds: [3, 4, 5, 6],
    },
    {
      nombre_Equipo: 'Equipo E',
      cantidad_Tripulantes: 3,
      clase_Viaje: 'Económica',
      valoracion: 5,
      trabajadorIds: [7, 8, 9],
    },
    {
      nombre_Equipo: 'Equipo F',
      cantidad_Tripulantes: 5,
      clase_Viaje: 'Primera Clase',
      valoracion: 5,
      trabajadorIds: [10, 1, 2, 3, 4],
    },
    {
      nombre_Equipo: 'Equipo G',
      cantidad_Tripulantes: 4,
      clase_Viaje: 'Business',
      valoracion: 5,
      trabajadorIds: [5, 6, 7, 8],
    },
    {
      nombre_Equipo: 'Equipo H',
      cantidad_Tripulantes: 3,
      clase_Viaje: 'Económica',
      valoracion: 5,
      trabajadorIds: [9, 10, 1],
    },
    {
      nombre_Equipo: 'Equipo I',
      cantidad_Tripulantes: 4,
      clase_Viaje: 'Business',
      valoracion: 5,
      trabajadorIds: [2, 3, 4, 5],
    },
    {
      nombre_Equipo: 'Equipo J',
      cantidad_Tripulantes: 5,
      clase_Viaje: 'Primera Clase',
      valoracion: 5,
      trabajadorIds: [6, 7, 8, 9, 10],
    },
  ],
};
