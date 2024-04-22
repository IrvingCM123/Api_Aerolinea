import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Avion } from '../../aviones/entities/avion.entity';
import { Ubicacion } from '../../ubicaciones/entities/ubicacion.entity';
import { Estado_Viaje } from '../../../common/enums/estado-viaje.enum';

@Entity()
export class Viaje {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ubicacion)
  origen: Ubicacion;

  @ManyToOne(() => Ubicacion)
  destino: Ubicacion;

  @Column({ nullable: false, type: 'date' })
  fechaSalida: Date;

  @Column({ nullable: false, type: 'date' })
  fechaLlegada: Date;

  @Column({ nullable: false, default: Estado_Viaje.EN_CURSO })
  estadoViaje: string;

  @ManyToOne(() => Avion, { eager: true })
  avion: Avion;
}
