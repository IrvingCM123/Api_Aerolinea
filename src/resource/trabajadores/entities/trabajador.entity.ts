import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Tripulacion } from '../../tripulaciones/entities/tripulacion.entity';

@Entity()
export class Trabajador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 30 })
  nombre: string;

  @Column({ nullable: false, length: 30 })
  apellidos: string;

  @Column({ nullable: false, length: 20 })
  telefono: string;

  @Column({ nullable: false })
  correoElectronico: string;

  @Column({ nullable: false, type: 'date' })
  fechaNacimiento: Date;

  @Column({ nullable: false, length: 30 })
  nacionalidad: string;

  @Column({ nullable: false })
  horasVuelo: number;

  @OneToMany(() => Tripulacion, (tripulacion) => tripulacion.trabajadorId)
  tripulaciones: Tripulacion[];
}
