import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Vuelo } from '../../vuelos/entities/vuelo.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  reserva_ID: number;

  @ManyToOne(() => Vuelo, (vuelo) => vuelo.reserva_ID)
  vuelo_Id: Vuelo;

  @ManyToOne(() => Usuario, (usuario) => usuario.reserva_ID)
  id_usuario: Usuario;

  @Column({ type: 'timestamp', nullable: false })	// Fecha y hora de la reserva
  fechaReserva: Date;

  @Column({ type: 'timestamp', nullable: false })
  fechaExpiracion: Date; // Fecha y hora de expiración de la reserva
}
