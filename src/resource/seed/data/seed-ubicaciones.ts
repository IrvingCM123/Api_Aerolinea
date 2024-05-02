interface Ubicacion {
  ubicacion_Nombre: string;
}

interface SeedUbicaciones {
  ubicaciones: Ubicacion[];
}

export function registrarUbicaciones() {
  const nombresUbicaciones = [
    'Nueva York, EE. UU.',
    'París, Francia',
    'Tokio, Japón',
    'Londres, Reino Unido',
    'Sídney, Australia',
    'Roma, Italia',
    'Pekín, China',
    'Ciudad de México, México',
    'El Cairo, Egipto',
    'Río de Janeiro, Brasil',
    'Nueva Delhi, India',
    'Ciudad del Cabo, Sudáfrica',
    'Moscú, Rusia',
    'Dubái, Emiratos Árabes Unidos',
    'Toronto, Canadá',
    'Buenos Aires, Argentina',
    'Seúl, Corea del Sur',
    'Berlín, Alemania',
    'Bangkok, Tailandia',
    'Los Ángeles, EE. UU.',
  ];

  const ubicacionesGeneradas = nombresUbicaciones.map((nombre) => ({
    ubicacion_Nombre: nombre,
  }));

  console.log(ubicacionesGeneradas);
  return ubicacionesGeneradas;
}

export const initialUbicaciones: SeedUbicaciones = {
  ubicaciones: registrarUbicaciones(),
};
