import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Avion } from '../../aviones/entities/avion.entity';
import { Estado_Logico } from 'src/common/enums/estado_logico.enum';

@Entity()
export class Fabricante {
  @PrimaryGeneratedColumn()
  fabricante_Id: number;

  @Column({ nullable: false, length: 50 })
  fabricante_Nombre: string;

  @Column({ nullable: false, length: 50 })
  fabricante_Descripcion: string;

  @Column({ nullable: false, length: 12 })
  fabricante_Telefono: string;

  @Column({ nullable: false })
  fabricante_Email: string;

  @OneToMany(() => Avion, (avion) => avion.fabricanteId)
  avion_Id: Avion[];
}
