import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Ubicacion } from '../../ubicaciones/entities/ubicacion.entity';
import { TipoAeropuerto } from 'src/common/enums/tipo_aeropuerto.enum';

@Entity()
export class Aeropuerto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 50 })
  nombre: string;

  @Column({ nullable: false, default: TipoAeropuerto.NACIONAL })
  tipo: number;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.aeropuertos)
  ubicacion: Ubicacion;
}
