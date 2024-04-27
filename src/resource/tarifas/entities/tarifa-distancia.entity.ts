import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class TarifaDistancia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origen: string;

  @Column()
  destino: string;

  @Column()
  distancia: number;

  @Column()
  precioTarifa: number;

  @ManyToOne(() => TarifaDistancia, (tarifa) => tarifa.vuelosTarifaDistancia)
  vuelosTarifaDistancia: TarifaDistancia;
}
