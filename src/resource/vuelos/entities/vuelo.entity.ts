import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Avion } from '../../aviones/entities/avion.entity';
import { Piloto } from '../../pilotos/entities/piloto.entity';
import { Tripulacion } from '../../tripulaciones/entities/tripulacion.entity';
import { TarifaClase } from '../../tarifas/entities/tarifa-clase.entity';
import { TarifaDistancia } from '../../tarifas/entities/tarifa-distancia.entity';

@Entity()
export class Vuelo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Avion, (avion) => avion.vuelos)
  avion: Avion;

  @Column({ type: 'date' })
  fecha: Date;

  @ManyToOne(() => Piloto, (piloto) => piloto.vuelosPiloto)
  piloto: Piloto;

  @ManyToOne(() => Piloto, (coopiloto) => coopiloto.vuelosCopiloto)
  coopiloto: Piloto;

  @ManyToOne(() => Tripulacion, (tripulacion) => tripulacion.vuelosTripulacion)
  tripulacion: Tripulacion;

  @Column({ type: 'int' })
  horaSalida: number;

  @Column({ type: 'int' })
  pasajerosTotales: number;

  @Column({ type: 'int' })
  pasajerosApartados: number;

  @Column({ type: 'varchar', length: 20 })
  estado: string;

  @ManyToOne(() => TarifaClase, (tarifa) => tarifa.tarifaClase)
  tarifaClase: TarifaClase;

  @ManyToOne(() => TarifaDistancia, (tarifa) => tarifa.vuelosTarifaDistancia)
  tarifaDistancia: TarifaDistancia;
}
