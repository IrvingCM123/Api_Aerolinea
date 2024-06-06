import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, OneToMany } from 'typeorm';
import { Vuelo } from '../../vuelos/entities/vuelo.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Vuelo, (vuelo) => vuelo.reserva)
  vuelo: Vuelo;

  @ManyToOne(() => Usuario, (usuario) => usuario.reserva)
  usuario: Usuario;

  @Column({ type: 'timestamp', nullable: false })	// Fecha y hora de la reserva
  fechaReserva: Date;

  @Column({ type: 'timestamp', nullable: false })
  fechaExpiracion: Date; // Fecha y hora de expiración de la reserva
}
