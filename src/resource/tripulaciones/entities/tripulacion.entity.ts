import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Trabajador } from '../../trabajadores/entities/trabajador.entity';
import { Vuelo } from 'src/resource/vuelos/entities/vuelo.entity';

@Entity()
export class Tripulacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 20 })
  nombreEquipo: string;

  @Column()
  valoracion: number;

  @ManyToMany(() => Trabajador, (trabajador) => trabajador.tripulaciones)
  @JoinTable()
  tripulacionTrabajadores: Trabajador[];

  @OneToMany(() => Vuelo, (vuelo) => vuelo.tripulacion)
  vuelosTripulacion: Vuelo[];
}
