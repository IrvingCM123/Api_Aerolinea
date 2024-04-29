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
  ],
};
