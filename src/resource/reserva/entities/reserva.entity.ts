import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Vuelo } from '../../vuelos/entities/vuelo.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Boleto } from 'src/resource/boleto/entities/boleto.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  reserva_ID: number;

  @ManyToOne(() => Vuelo, { nullable: false, eager: true })
  Vuelo: Vuelo;

  @ManyToOne(() => Usuario, { nullable: false, eager: true})
  Usuario: Usuario;

  @Column({ type: 'timestamp', nullable: false })	// Fecha y hora de la reserva
  fechaReserva: Date;

  @Column({ type: 'timestamp', nullable: false })
  fechaExpiracion: Date; // Fecha y hora de expiración de la reserva

  @OneToMany(() => Boleto, (boleto) => boleto.reserva_ID)
  Boleto_ID: Boleto[];

  @Column({ type: 'int', nullable: false }) // Cantidad de boletos que va a comprar
  cantidadBoletos: number;

  @Column({ type: 'boolean', default: false }) // Indicador de si es viaje redondo
  viajeRedondo: boolean;
}