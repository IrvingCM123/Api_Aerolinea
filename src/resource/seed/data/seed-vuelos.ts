import { Estado_Viaje } from 'src/common/enums/estado-viaje.enum';

interface Vuelo {
  avion_Id: number;
  fecha: Date;
  piloto_Id: number;
  copiloto_Id: number;
  tripulacion_ID: number;
  horaSalida: string;
  pasajerosTotales: number;
  pasajerosApartados: number;
  estado: EstadoViaje;
  tarifa_Clase_Id: number;
  tarifa_distancia_Id: number;
}

type EstadoViaje = Estado_Viaje;

interface SeedVuelos {
  vuelos: Vuelo[];
}

export function registrar_Vuelos(
  pilotos: any,
  tripulacion: any,
  tarifasClase: any,
  tarifasDistancia: any,
  aviones: any,
) {
  const array_Pilotos = pilotos;
  const array_Tripulacion = tripulacion;
  const array_Tarifas_Clase = tarifasClase;
  const array_Tarifas_Distancia = tarifasDistancia;
  const array_Estados = [
    Estado_Viaje.POR_INICIAR,
    Estado_Viaje.EN_CURSO,
    Estado_Viaje.FINALIZADO,
  ];
  const array_Aviones = aviones;

  const vuelos_generados = [];

  for (let i = 0; i < 100; i++) {
    const vuelo: Vuelo = {
      avion_Id: array_Aviones[Math.floor(Math.random() * array_Aviones.length)],
      fecha: new Date(generar_fechas()),
      piloto_Id:
        array_Pilotos[Math.floor(Math.random() * array_Pilotos.length)],
      copiloto_Id:
        array_Pilotos[Math.floor(Math.random() * array_Pilotos.length)],
      tripulacion_ID:
        array_Tripulacion[Math.floor(Math.random() * array_Tripulacion.length)]
          .tripulacion_ID,
      horaSalida: generar_horas(),
      pasajerosTotales: Math.floor(Math.random() * 200),
      pasajerosApartados: Math.floor(Math.random() * 200),
      estado: array_Estados[Math.floor(Math.random() * array_Estados.length)],
      tarifa_Clase_Id:
        array_Tarifas_Clase[
          Math.floor(Math.random() * array_Tarifas_Clase.length)
        ],
      tarifa_distancia_Id:
        array_Tarifas_Distancia[
          Math.floor(Math.random() * array_Tarifas_Distancia.length)
        ],
    };
    vuelos_generados.push(vuelo);
  }

  return vuelos_generados;
}

function generar_horas() {
  let hora_generada = '';
  const hora = Math.floor(Math.random() * 24);
  const minutos = Math.floor(Math.random() * 59);
  hora_generada = (hora + ':' + minutos).toString();
  return hora_generada;
}

function generar_fechas() {
  let fecha_generada = '';
  const año = Math.floor(Math.random() * (2024 - 2015) + 2015);
  const dia = Math.floor(Math.random() * 31);
  const mes = Math.floor(Math.random() * 12);
  fecha_generada = (año + '-' + mes + '-' + dia).toString();
  return fecha_generada;
}
