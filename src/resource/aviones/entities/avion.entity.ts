import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ESTADO_OPERATIVO } from '../../../common/enums/estado-operativo.enum';
import { ModeloAvion } from '../../modelos/entities/modelo-avion.entity';
import { Vuelo } from '../../vuelos/entities/vuelo.entity';

@Entity()
export class Avion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ModeloAvion, (modeloAvion) => modeloAvion.aviones)
  modeloAvion: ModeloAvion;

  @OneToMany(() => Vuelo, (vuelo) => vuelo.avion)
  vuelos: Vuelo[];

  @Column({ nullable: false })
  capacidadPasajero: number;

  @Column({ nullable: false })
  capacidadCarga: number;

  @Column({ nullable: false })
  velocidadMaxima: number;

  @Column({ nullable: false })
  anioFabricacion: number;

  @Column({ nullable: false })
  tipoMotor: string;

  @Column({ nullable: false })
  autonomia: string;

  @Column({
    nullable: false,
    default: ESTADO_OPERATIVO.OPERATIVO,
    enum: ESTADO_OPERATIVO,
    type: 'enum',
  })
  estadoOperativo: string;
}
