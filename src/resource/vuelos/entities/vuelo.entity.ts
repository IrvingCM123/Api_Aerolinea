import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Avion } from '../../aviones/entities/avion.entity';
import { Piloto } from '../../pilotos/entities/piloto.entity';
import { Tarifa } from '../../tarifas/entities/tarifa.entity';
import { Tripulacion } from '../../tripulaciones/entities/tripulacion.entity';
import { Estado_Viaje } from 'src/common/enums/estado-viaje.enum';

@Entity()
export class Vuelo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Avion)
  avion: Avion;

  @Column({ type: 'date' })
  fecha: Date;

  @ManyToOne(() => Piloto)
  piloto: Piloto;

  @ManyToOne(() => Piloto)
  copiloto: Piloto;

  @ManyToOne(() => Tripulacion)
  tripulacion: Tripulacion;

  @Column()
  horaSalida: number;

  @Column()
  pasajerosTotales: number;

  @Column()
  pasajerosApartados: number;

  @Column({ nullable: false, default: Estado_Viaje.POR_INICIAR })
  estado: string;

  @OneToOne(() => Tarifa, { cascade: true })
  @JoinColumn()
  tarifa: Tarifa;
}
