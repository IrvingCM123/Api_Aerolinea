import { Reserva } from 'src/resource/reserva/entities/reserva.entity';
import { Usuario } from '../../../resource/usuario/entities/usuario.entity';
import { Viaje } from '../../../resource/viajes/entities/viaje.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Boleto {
  @PrimaryGeneratedColumn()
  Boleto_ID: number;

  @ManyToOne(() => Usuario, { nullable: false, eager: true })
  Usuario: Usuario;

  @ManyToOne(() => Viaje, { nullable: false, eager: true })
  Viaje: Viaje;

  @Column({ length: 20, nullable: false })
  Numero_Boleto: string;

  @Column({ type: 'timestamptz', nullable: false })
  Fecha_Compra: Date | string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  Precio: number;

  @Column({ default: false, nullable: false })
  Estado_Pago: boolean;
}