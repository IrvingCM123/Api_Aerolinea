interface Ubicacion {
  ubicacion_Nombre: string;
}

interface SeedUbicaciones {
  ubicaciones: Ubicacion[];
}

export const initialUbicaciones: SeedUbicaciones = {
  ubicaciones: [
    { ubicacion_Nombre: 'Nueva York, EE. UU.' },
    { ubicacion_Nombre: 'París, Francia' },
    { ubicacion_Nombre: 'Tokio, Japón' },
    { ubicacion_Nombre: 'Londres, Reino Unido' },
    { ubicacion_Nombre: 'Sídney, Australia' },
    { ubicacion_Nombre: 'Roma, Italia' },
    { ubicacion_Nombre: 'Pekín, China' },
    { ubicacion_Nombre: 'Ciudad de México, México' },
    { ubicacion_Nombre: 'El Cairo, Egipto' },
    { ubicacion_Nombre: 'Río de Janeiro, Brasil' },
    { ubicacion_Nombre: 'Nueva Delhi, India' },
    { ubicacion_Nombre: 'Ciudad del Cabo, Sudáfrica' },
    { ubicacion_Nombre: 'Moscú, Rusia' },
    { ubicacion_Nombre: 'Dubái, Emiratos Árabes Unidos' },
    { ubicacion_Nombre: 'Toronto, Canadá' },
    { ubicacion_Nombre: 'Buenos Aires, Argentina' },
    { ubicacion_Nombre: 'Seúl, Corea del Sur' },
    { ubicacion_Nombre: 'Berlín, Alemania' },
    { ubicacion_Nombre: 'Bangkok, Tailandia' },
    { ubicacion_Nombre: 'Los Ángeles, EE. UU.' },
  ],
};
