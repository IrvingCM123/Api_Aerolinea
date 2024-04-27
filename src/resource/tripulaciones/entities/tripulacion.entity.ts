import { Trabajador } from 'src/resource/trabajadores/entities/trabajador.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Tripulacion {
  @PrimaryGeneratedColumn()
  tripulacion_ID: number;

  @Column({ nullable: false, length: 20 })
  nombre_Equipo: string;

  @Column({ nullable: false })
  cantidad_Tripulantes: number;

  @Column({ nullable: false, length: 20 })
  clase_Viaje: string;

  @Column({ nullable: false })
  valoracion: number;

  @ManyToOne(() => Trabajador, (trabajador) => trabajador.id)
  @JoinColumn({ name: 'id' })
  trabajadorId: number;
}
