import { EstadoLogico } from 'src/common/enums/estado-logico.enum';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Vuelo } from 'src/resource/vuelos/entities/vuelo.entity';

@Entity()
export class TarifaClase {
  @PrimaryGeneratedColumn()
  tarifa_Clase_Id: number;

  @Column({ length: 30, nullable: false })
  tarifa_Clase_Nombre: string;

  @Column({
    type: 'enum',
    nullable: false,
    enum: EstadoLogico,
    default: EstadoLogico.ACTIVO,
  })
  tarifa_Clase_Estado: EstadoLogico;

  @Column({ nullable: false })
  precioTarifa: number;

  @OneToMany(() => Vuelo, (vuelo) => vuelo.tarifa_Clase_Id)
  vuelo_Id: Vuelo;
}
