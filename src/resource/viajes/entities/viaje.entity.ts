import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { Estado_Viaje } from 'src/common/enums/estado-viaje.enum';
import { Aeropuerto } from 'src/resource/aeropuertos/entities/aeropuerto.entity';
import { Avion } from 'src/resource/aviones/entities/avion.entity';
import { Vuelo } from 'src/resource/vuelos/entities/vuelo.entity';

@Entity()
export class Viaje {
  @PrimaryGeneratedColumn()
  Viaje_ID: number;

  @Column({ type: 'date', nullable: false })
  Fecha_Salida: Date;

  @Column({ type: 'date', nullable: false })
  Fecha_Llegada: Date;

  @Column({
    type: 'enum',
    enum: Estado_Viaje,
    nullable: false,
    default: Estado_Viaje.POR_INICIAR,
  })
  Estado_Viaje: Estado_Viaje;

  @ManyToOne(() => Avion, { nullable: false })
  Numero_Avion: Avion;

  @ManyToOne(() => Aeropuerto, { nullable: false })
  Aeropuerto_Destino: Aeropuerto;

  @ManyToOne(() => Aeropuerto, { nullable: false })
  Aeropuerto_Origen: Aeropuerto;
}
