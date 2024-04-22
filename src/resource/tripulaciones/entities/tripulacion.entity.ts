import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Trabajador } from '../../trabajadores/entities/trabajador.entity';

@Entity()
export class Tripulacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 20 })
  nombreEquipo: string;

  @Column({ nullable: false })
  cantidadTripulantes: number;

  @Column({ nullable: false, length: 20 })
  claseViaje: string;

  @Column()
  valoracion: number;

  @ManyToMany(() => Trabajador, (trabajador) => trabajador.tripulaciones)
  @JoinTable()
  tripulacionTrabajadores: Trabajador[];
}
