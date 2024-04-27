import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class TarifaClase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  claseViaje: string;

  @Column()
  precioTarifa: number;

  @ManyToOne(() => TarifaClase, (tarifa) => tarifa.tarifaClase)
  tarifaClase: TarifaClase;
}
