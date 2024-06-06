import { Estado_Viaje } from 'src/common/enums/estado-viaje.enum';
import { Avion } from 'src/resource/aviones/entities/avion.entity';
import { Piloto } from 'src/resource/pilotos/entities/piloto.entity';
import { Tripulacion } from 'src/resource/tripulaciones/entities/tripulacion.entity';
import { Reserva } from '../../reserva/entities/reserva.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('vuelos')
export class Vuelo {
  
  @PrimaryGeneratedColumn()
  Vuelo_ID: number;

  @ManyToOne(() => Avion, (avion) => avion.vuelo_Id, {
    eager: true,
  })
  @JoinColumn({ name: 'avion_Id' })
  avion_Id: Avion;

  // @Column({ type: 'date', nullable: false })
  // fecha: Date;

  @ManyToOne(() => Piloto, (piloto) => piloto.vuelo_Id, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'piloto_Id' })
  piloto_Id: Piloto;

  @ManyToOne(() => Piloto, (copiloto) => copiloto.copiloto_Id, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'copiloto_Id' })
  copiloto_Id: Piloto;

  @ManyToOne(() => Tripulacion, (tripulacion) => tripulacion.vuelo_Id, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'tripulacion_ID' })
  tripulacion_ID: Tripulacion;

  // @Column({ type: 'text', nullable: false })
  // horaSalida: string;   <---  jajajaja es un string XD

  // Relación uno a muchos con Reserva
  @OneToMany(() => Reserva, (reserva) => reserva.vuelo) // Indicar la relación con Reserva
  reserva: Reserva[]; // Nombre de la propiedad para acceder a las reservas desde un vuelo


  @Column({ type: 'int', nullable: false })
  pasajerosTotales: number;

  @Column({ type: 'int', nullable: false })
  pasajerosApartados: number;

  @Column({
    type: 'enum',
    enum: Estado_Viaje,
    nullable: false,
    default: Estado_Viaje.POR_INICIAR,
  })
  estado: Estado_Viaje;

  // @ManyToOne(() => TarifaClase, (tarifaClase) => tarifaClase.vuelo_Id, {
  //   nullable: false,
  //   eager: true,
  // })
  // @JoinColumn({ name: 'tarifa_Clase_Id' })
  // tarifa_Clase_Id: TarifaClase;

  // @ManyToOne(
  //   () => TarifaDistancia,
  //   (tarifaDistancia) => tarifaDistancia.vuelo_Id,
  //   {
  //     nullable: false,
  //     eager: true,
  //   },
  // )
  // @JoinColumn({ name: 'tarifa_distancia_Id' })
  // tarifa_distancia_Id: TarifaDistancia;
}
