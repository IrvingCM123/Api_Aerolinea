import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reserva } from '../../../reserva/entities/reserva.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_Usuario: number;

  @Column({ nullable: false })
  usuario_Nombre: string;

  @Column({ nullable: false })
  usuario_Apellidos: string;

  @Column({ nullable: false })
  usuario_Edad: number;

  @OneToMany(() => Reserva, reserva => reserva.usuario)
  reserva: Reserva[];
}
