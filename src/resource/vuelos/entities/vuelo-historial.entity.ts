import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Vuelo } from './vuelo.entity';
import { Viaje } from '../../viajes/entities/viaje.entity';

@Entity()
export class HistViajeVuelos {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Viaje)
  viaje: Viaje;

  @ManyToOne(() => Vuelo)
  vuelo: Vuelo;

  @Column({ type: 'date' })
  fechaAsignacion: Date;
}
