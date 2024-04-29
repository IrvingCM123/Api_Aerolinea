import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { EstadoViaje } from 'src/common/enums/estado-viaje.enum';
import { Aeropuerto } from 'src/resource/aeropuertos/entities/aeropuerto.entity';
import { Avion } from 'src/resource/aviones/entities/avion.entity';
import { Ubicacion } from '../../ubicaciones/entities/ubicacion.entity'; // Importa la entidad Ubicacion

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
    enum: EstadoViaje,
    nullable: false,
    default: EstadoViaje.POR_INICIAR,
  })
  Estado_Viaje: EstadoViaje;

  @ManyToOne(() => Avion, { nullable: false })
  Numero_Avion: Avion;

  @ManyToOne(() => Aeropuerto, { nullable: false })
  Aeropuerto_Destino: Aeropuerto;

  @ManyToOne(() => Aeropuerto, { nullable: false })
  Aeropuerto_Origen: Aeropuerto;
}
