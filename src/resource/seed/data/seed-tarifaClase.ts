import { EstadoLogico } from 'src/common/enums/estado-logico.enum';

interface TarifaClase {
  tarifa_Clase_Nombre: string;
  tarifa_Clase_Estado: EstadoTarifa;
  precioTarifa: number;
}

type EstadoTarifa = EstadoLogico;

interface SeedTarifasClase {
  tarifasClase: TarifaClase[];
}

export const initialTarifasClase: SeedTarifasClase = {
  tarifasClase: [
    {
      tarifa_Clase_Nombre: 'Económica',
      tarifa_Clase_Estado: EstadoLogico.ACTIVO,
      precioTarifa: 100,
    },
    {
      tarifa_Clase_Nombre: 'Primera Clase',
      tarifa_Clase_Estado: EstadoLogico.ACTIVO,
      precioTarifa: 500,
    },
    {
      tarifa_Clase_Nombre: 'Business',
      tarifa_Clase_Estado: EstadoLogico.ACTIVO,
      precioTarifa: 300,
    },
  ],
};
