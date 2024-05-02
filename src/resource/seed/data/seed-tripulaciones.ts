interface Tripulacion {
  tripulacion_NombreEquipo: string;
  tripulacion_CantidadTripulantes: number;
  tripulacion_ClaseViaje: string;
  tripulacion_Valoracion: number;
  tripulacion_TrabajadorIds: number[];
}

interface SeedTripulaciones {
  tripulaciones: Tripulacion[];
}

export function registrarTripulaciones() {
  const nombresEquipos = [
    'Equipo A',
    'Equipo B',
    'Equipo C',
    'Equipo D',
    'Equipo E',
    'Equipo F',
    'Equipo G',
    'Equipo H',
    'Equipo I',
    'Equipo J',
  ];

  const cantidadesTripulantes = [5, 4, 3, 4, 3, 5, 4, 3, 4, 5];

  const clasesViaje = [
    'Económica',
    'Primera Clase',
    'Económica',
    'Business',
    'Económica',
    'Primera Clase',
    'Business',
    'Económica',
    'Business',
    'Primera Clase',
  ];

  const valoraciones = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

  const trabajadorIds = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9],
    [10, 1, 2],
    [3, 4, 5, 6],
    [7, 8, 9],
    [10, 1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 1],
    [2, 3, 4, 5],
    [6, 7, 8, 9, 10],
  ];

  const tripulacionesGeneradas = [];

  for (let i = 0; i < 10; i++) {
    const tripulacion: Tripulacion = {
      tripulacion_NombreEquipo: nombresEquipos[i],
      tripulacion_CantidadTripulantes: cantidadesTripulantes[i],
      tripulacion_ClaseViaje: clasesViaje[i],
      tripulacion_Valoracion: valoraciones[i],
      tripulacion_TrabajadorIds: trabajadorIds[i],
    };
    tripulacionesGeneradas.push(tripulacion);
  }

  console.log(tripulacionesGeneradas);
  return tripulacionesGeneradas;
}

export const initialTripulaciones: SeedTripulaciones = {
  tripulaciones: registrarTripulaciones(),
};
