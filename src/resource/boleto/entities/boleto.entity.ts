import { Usuario } from '../../../resource/usuario/entities/usuario.entity';
import { Viaje } from '../../../resource/viajes/entities/viaje.entity';
import { Reserva } from '../../reserva/entities/reserva.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Boleto {
  @PrimaryGeneratedColumn()
  Boleto_ID: number;

  @ManyToOne(() => Usuario, { nullable: false, eager: true })
  Usuario: Usuario;

  @ManyToOne(() => Viaje, { nullable: false, eager: true })
  Viaje: Viaje;

  @ManyToOne(() => Reserva, (reserva) => reserva.Boleto_ID, { nullable: false })
  reserva_ID: Reserva;

  @Column({ length: 20, nullable: false })
  Numero_Boleto: string;

  @Column({ type: 'timestamptz', nullable: false })
  Fecha_Compra: Date | string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  Precio: number;

  @Column({ default: false, nullable: false })
  Estado_Pago: boolean;
}
