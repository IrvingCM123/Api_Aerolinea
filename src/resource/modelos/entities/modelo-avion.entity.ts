import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Avion } from '../../aviones/entities/avion.entity';
import { Fabricante } from '../../fabricantes/entities/fabricante.entity';

@Entity()
export class ModeloAvion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 25 })
  nombre: string;

  @Column({ nullable: false, length: 15 })
  categoria: string;

  @ManyToOne(() => Fabricante, (fabricante) => fabricante.modelosAvion)
  fabricante: Fabricante;

  @OneToMany(() => Avion, (avion) => avion.modeloAvion)
  aviones: Avion[];
}
