import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Aeropuerto } from '../../aeropuertos/entities/aeropuerto.entity';
import { TarifaClase } from 'src/resource/tarifas/entities/tarifa-clase.entity';
import { TarifaDistancia } from 'src/resource/tarifas/entities/tarifa-distancia.entity';

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  ubicacion_Id: number;

  @Column({ nullable: false, length: 30 })
  ubicacion_Nombre: string;

  @OneToMany(() => Aeropuerto, (aeropuerto) => aeropuerto.aeropuerto_Ubicacion)
  aeropuertosId: Aeropuerto[];

  @OneToMany(() => TarifaDistancia, (tarifaDistancia) => tarifaDistancia.origen)
  tarifaDistanciaOrigen: TarifaDistancia;

  @OneToMany(
    () => TarifaDistancia,
    (tarifaDistancia) => tarifaDistancia.destino,
  )
  tarifaDistanciaDestino: TarifaDistancia;
}
