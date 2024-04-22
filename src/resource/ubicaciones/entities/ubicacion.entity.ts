import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Aeropuerto } from '../../aeropuertos/entities/aeropuerto.entity';

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 50 })
  nombre: string;

  @OneToMany(() => Aeropuerto, (aeropuerto) => aeropuerto.ubicacion)
  aeropuertos: Aeropuerto[];
}
