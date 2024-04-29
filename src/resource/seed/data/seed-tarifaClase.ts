import { Estado_Logico } from "src/common/enums/estado_logico.enum";
interface TarifaClase {
  tarifa_Clase_Nombre: string;
  tarifa_Clase_Estado: EstadoTarifa;
  precioTarifa: number;
}

type EstadoTarifa = Estado_Logico;

interface SeedTarifasClase {
  tarifasClase: TarifaClase[];
}

export const initialTarifasClase: SeedTarifasClase = {
  tarifasClase: [
    {
      tarifa_Clase_Nombre: 'Económica',
      tarifa_Clase_Estado: Estado_Logico.ACTIVO,
      precioTarifa: 100,
    },
    {
      tarifa_Clase_Nombre: 'Primera Clase',
      tarifa_Clase_Estado: Estado_Logico.ACTIVO,
      precioTarifa: 500,
    },
    {
      tarifa_Clase_Nombre: 'Business',
      tarifa_Clase_Estado: Estado_Logico.ACTIVO,
      precioTarifa: 300,
    },
  ],
};
