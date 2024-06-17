import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Vuelo } from '../../vuelos/entities/vuelo.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  reserva_ID: number;

  @ManyToOne(() => Vuelo, { nullable: false, eager: true })
  Vuelo: Vuelo;

  @ManyToOne(() => Usuario, { nullable: false, eager: true })
  Usuario: Usuario;

  @Column({ type: 'timestamp', nullable: false })	// Fecha y hora | cambiar automáticamente a la fecha y hora actual
  fechaReserva: Date;

  @Column({ type: 'timestamp', nullable: false })
  fechaExpiracion: Date; // Fecha y hora de expiración de la reserva

  @Column({ type: 'int', nullable: false })
  cantidadPasajeros: number; // Nueva columna para la cantidad de pasajeros
}
