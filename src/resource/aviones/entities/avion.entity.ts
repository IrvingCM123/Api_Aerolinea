import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { EstadoOperativo } from '../../../common/enums/estado-operativo.enum';
import { ModeloAvion } from '../../modelos/entities/modelo-avion.entity';
import { Fabricante } from 'src/resource/fabricantes/entities/fabricante.entity';
import { EstadoLogico } from '../../../common/enums/estado-logico.enum';
import { Vuelo } from 'src/resource/vuelos/entities/vuelo.entity';

@Entity()
export class Avion {
  @PrimaryGeneratedColumn()
  avion_Id: number;

  @ManyToOne(() => ModeloAvion, (modeloAvion) => modeloAvion.avion_Id, {
    eager: true,
  })
  @JoinColumn({ name: 'modeloAvionId' })
  modeloAvionId: ModeloAvion;

  @ManyToOne(() => Fabricante, (fabricante) => fabricante.avion_Id, {
    eager: true,
  })
  @JoinColumn({ name: 'fabricanteId' })
  fabricanteId: Fabricante;

  @Column({ nullable: false })
  avion_Capacidad_Pasajeros: number;

  @Column({ nullable: false })
  avion_Capacidad_Carga: number;

  @Column({ nullable: false })
  avion_Velocidad_Maxima: number;

  @Column({ nullable: false })
  avion_Anio_Fabricacion: number;

  @Column({
    nullable: false,
    default: EstadoOperativo.OPERATIVO,
    enum: EstadoOperativo,
    type: 'enum',
  })
  avion_Estado_Operativo: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: EstadoLogico,
    default: EstadoLogico.ACTIVO,
  })
  avion_Estado_Logico: EstadoLogico;

  @Column({ nullable: false })
  avion_Tipo_Motor: string;

  @Column({ nullable: false })
  avion_Autonomia: string;

  @OneToMany(() => Vuelo, (vuelo) => vuelo.avion_Id)
  vuelo_Id: Vuelo;
}
