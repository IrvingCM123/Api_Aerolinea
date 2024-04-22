import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Avion } from '../../aviones/entities/avion.entity';
import { CreateFabricanteDto } from '../../fabricantes/dto/create-fabricante.dto';

@Entity()
export class ModeloAvion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 25 })
  nombre: string;

  @Column({ nullable: false, length: 15 })
  categoria: string;

  @Column({ nullable: true, type: 'int' })
  fabricanteId: number;

  @Column({ type: 'json', nullable: false })
  fabricante: CreateFabricanteDto;

  @OneToMany(() => Avion, (avion) => avion.modeloAvion)
  aviones: Avion[];
}
