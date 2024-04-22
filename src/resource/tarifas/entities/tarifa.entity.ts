import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Ubicacion } from '../../../resource/ubicaciones/entities/ubicacion.entity';

@Entity()
export class Tarifa {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ubicacion, { nullable: false })
  origen: Ubicacion;

  @ManyToOne(() => Ubicacion, { nullable: false })
  destino: Ubicacion;

  @Column({ nullable: true, type: 'float' })
  tarifaClase: number;

  @Column({ nullable: true, type: 'float' })
  tarifaDistancia: number;
}
