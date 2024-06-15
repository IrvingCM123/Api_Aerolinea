import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Vuelo } from '../../vuelos/entities/vuelo.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Boleto } from '../../boleto/entities/boleto.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  reserva_ID: number;

  @ManyToOne(() => Vuelo, (vuelo) => vuelo.reserva_ID, { nullable: false })
  Vuelo_ID: Vuelo;

  @ManyToOne(() => Usuario, (usuario) => usuario.reserva_ID, { nullable: false })
  id_Usuario: Usuario;

  @Column({ type: 'timestamp', nullable: false })
  fechaReserva: Date;

  @Column({ type: 'timestamp', nullable: false })
  fechaExpiracion: Date;

  @OneToMany(() => Boleto, (boleto) => boleto.reserva_ID)
  Boleto_ID: Boleto[];
}

