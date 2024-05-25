import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Estado_Viaje } from 'src/common/enums/estado-viaje.enum';
import { Aeropuerto } from 'src/resource/aeropuertos/entities/aeropuerto.entity';
import { Avion } from 'src/resource/aviones/entities/avion.entity';
import { Vuelo } from 'src/resource/vuelos/entities/vuelo.entity';
import { TarifaClase } from 'src/resource/tarifas-clase/entities/tarifa-clase.entity';
import { TarifaClaseViajes } from './tarifasclase-viaje.entity';
import { TarifaDistancia } from 'src/resource/tarifas-distancia/entities/tarifa-distancia.entity';
import { TarifaDistanciaViajes } from './tarifadistancia-viajes.entity';

@Entity()
export class Viaje {
  @PrimaryGeneratedColumn()
  Viaje_ID: number;

  @Column({ nullable: true, type: 'timestamptz' })
  fechaSalida: Date | string

  @Column({ nullable: true, type: 'timestamptz' })
  fechaLlegada: Date | string
  @Column({
    type: 'enum',
    enum: Estado_Viaje,
    nullable: false,
    default: Estado_Viaje.POR_INICIAR,
  })
  estadoViaje: Estado_Viaje;

  // @ManyToOne(() => Avion, { nullable: false, eager: true })
  // numeroAvion: Avion;

  @ManyToOne(() => Aeropuerto, { nullable: false, eager: true })
  aeropuertoDestino: Aeropuerto;

  @ManyToOne(() => Aeropuerto, { nullable: false, eager: true })
  aeropuertoOrigen: Aeropuerto;

  @ManyToOne(() => Vuelo, { nullable: false, eager: true })
  vueloId: Vuelo;

  @OneToMany(() => TarifaClaseViajes, (m) => m.viaje, { eager: true })
  tarifas_clase: TarifaClaseViajes[]
  @OneToMany(() => TarifaDistanciaViajes, (m) => m.viaje, { eager: true })
  tarifas_distancia: TarifaDistanciaViajes[]

  calculLugaresDisponoibles() {
    return this.vueloId.avion_Id.avion_Capacidad_Pasajeros - this.vueloId.pasajerosApartados - this.vueloId.pasajerosTotales
  }
}
