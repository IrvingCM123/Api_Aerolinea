import { Estado_Viaje } from 'src/common/enums/estado-viaje.enum';
import { Avion } from 'src/resource/aviones/entities/avion.entity';
import { Piloto } from 'src/resource/pilotos/entities/piloto.entity';
import { TarifaClase } from 'src/resource/tarifas/entities/tarifa-clase.entity';
import { TarifaDistancia } from 'src/resource/tarifas/entities/tarifa-distancia.entity';
import { Tripulacion } from 'src/resource/tripulaciones/entities/tripulacion.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('vuelos')
export class Vuelo {
  @PrimaryGeneratedColumn()
  Vuelo_ID: number;

  @ManyToOne(() => Avion, { nullable: false })
  @JoinColumn({ name: 'avion_Id' })
  avion: Avion;

  @Column({ type: 'date', nullable: false })
  fecha: Date;

  @ManyToOne(() => Piloto, { nullable: false })
  @JoinColumn({ name: 'piloto_Id' })
  piloto: Piloto;

  @ManyToOne(() => Piloto, { nullable: false })
  @JoinColumn({ name: 'copiloto_Id' })
  copiloto: Piloto;

  @ManyToOne(() => Tripulacion, { nullable: false })
  @JoinColumn({ name: 'tripulacion_ID' })
  tripulacion: Tripulacion;

  @Column({ type: 'int', nullable: false })
  horaSalida: number;

  @Column({ type: 'int', nullable: false })
  pasajerosTotales: number;

  @Column({ type: 'int', nullable: false })
  pasajerosApartados: number;

  @Column({
    type: 'enum',
    enum: Estado_Viaje,
    nullable: false,
    default: Estado_Viaje.POR_INICIAR,
  })
  estado: Estado_Viaje;

  @ManyToOne(() => TarifaClase, { nullable: false })
  @JoinColumn({ name: 'tarifa_Clase_Id' })
  tarifaClase: TarifaClase;

  @ManyToOne(() => TarifaDistancia, { nullable: false })
  @JoinColumn({ name: 'tarifa_distancia_Id' })
  tarifaDistancia: TarifaDistancia;
}
