import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Tripulacion } from './tripulacion.entity';
import { Trabajador } from '../../trabajadores/entities/trabajador.entity';

@Entity()
export class TripulacionTrabajador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 20 })
  rol: string;

  @ManyToOne(() => Tripulacion)
  tripulacion: Tripulacion;

  @ManyToOne(() => Trabajador)
  trabajador: Trabajador;
}
