import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ModeloAvion } from '../../modelos/entities/modelo-avion.entity';

@Entity()
export class Fabricante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 50 })
  nombre: string;

  @Column({ nullable: false, length: 50 })
  descripcion: string;

  @Column({ nullable: false, length: 12 })
  telefono: string;

  @Column({ nullable: false })
  email: string;

  @OneToMany(() => ModeloAvion, (modeloAvion) => modeloAvion.fabricante)
  modelosAvion: ModeloAvion[];
}
