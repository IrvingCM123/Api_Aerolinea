import { Ubicacion } from 'src/resource/ubicaciones/entities/ubicacion.entity';
import { Vuelo } from 'src/resource/vuelos/entities/vuelo.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class TarifaDistancia {
  @PrimaryGeneratedColumn()
  tarifa_distancia_Id: number;

  @Column({ nullable: false, length: 30 })
  tarifa_distancia_Nombre: string;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.tarifaDistanciaOrigen)
  @JoinColumn({ name: 'ubicacion_id' })
  origen: number;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.tarifaDistanciaDestino)
  @JoinColumn({ name: 'ubicacion_id' })
  destino: number;

  @Column()
  distancia: number;

  @Column()
  precioTarifa: number;

  @ManyToOne(() => Vuelo, (vuelo) => vuelo.tarifaDistancia)
  vuelo: Vuelo;
}
