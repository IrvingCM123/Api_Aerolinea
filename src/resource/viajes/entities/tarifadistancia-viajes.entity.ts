import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Viaje } from "./viaje.entity"
import { TarifaClase } from "src/resource/tarifas-clase/entities/tarifa-clase.entity"
import { TarifaDistancia } from "src/resource/tarifas-distancia/entities/tarifa-distancia.entity"

@Entity()
export class TarifaDistanciaViajes {
    @PrimaryGeneratedColumn()
    id_tarifasclase_viaje: number
    @ManyToOne(() => Viaje)
    viaje: Viaje
    @ManyToOne(() => TarifaDistancia, { eager: true })
    tarfa_distancia: TarifaDistancia
}