interface TarifaDistancia {
  tarifa_distancia_Nombre: string;
  origenId: number;
  destinoId: number;
  distancia: number;
  precioTarifa: number;
}

interface SeedTarifasDistancia {
  tarifasDistancia: TarifaDistancia[];
}

export const initialTarifasDistancia: SeedTarifasDistancia = {
  tarifasDistancia: [
    {
      tarifa_distancia_Nombre: 'Tarifa A',
      origenId: 1,
      destinoId: 2,
      distancia: 500,
      precioTarifa: 200,
    },
    {
      tarifa_distancia_Nombre: 'Tarifa B',
      origenId: 3,
      destinoId: 4,
      distancia: 800,
      precioTarifa: 300,
    },
    {
      tarifa_distancia_Nombre: 'Tarifa C',
      origenId: 5,
      destinoId: 6,
      distancia: 1000,
      precioTarifa: 400,
    },
    // New tariff distances
    {
      tarifa_distancia_Nombre: 'Tarifa D',
      origenId: 7,
      destinoId: 8,
      distancia: 1200,
      precioTarifa: 500,
    },
    {
      tarifa_distancia_Nombre: 'Tarifa E',
      origenId: 9,
      destinoId: 10,
      distancia: 1500,
      precioTarifa: 600,
    },
    {
      tarifa_distancia_Nombre: 'Tarifa F',
      origenId: 11,
      destinoId: 12,
      distancia: 1800,
      precioTarifa: 700,
    },
    {
      tarifa_distancia_Nombre: 'Tarifa G',
      origenId: 13,
      destinoId: 14,
      distancia: 2000,
      precioTarifa: 800,
    },
    {
      tarifa_distancia_Nombre: 'Tarifa H',
      origenId: 15,
      destinoId: 16,
      distancia: 2200,
      precioTarifa: 900,
    },
    {
      tarifa_distancia_Nombre: 'Tarifa I',
      origenId: 17,
      destinoId: 18,
      distancia: 2500,
      precioTarifa: 1000,
    },
    {
      tarifa_distancia_Nombre: 'Tarifa J',
      origenId: 19,
      destinoId: 20,
      distancia: 3000,
      precioTarifa: 1100,
    },
  ],
};
