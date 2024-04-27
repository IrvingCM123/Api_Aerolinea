import { Vuelo } from 'src/resource/vuelos/entities/vuelo.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Piloto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 30 })
  nombre: string;

  @Column({ nullable: false, length: 30 })
  apellidos: string;

  @Column({ nullable: false })
  telefono: number;

  @Column({ nullable: false, length: 30 })
  correoElectronico: string;

  @Column({ nullable: false, length: 30 })
  licenciaPiloto: string;

  @Column({ nullable: false, type: 'date' })
  fechaNacimiento: Date;

  @Column({ nullable: false, length: 30 })
  nacionalidad: string;

  @Column({ nullable: false })
  horasVuelo: number;

  @Column({ nullable: false, type: 'simple-array' })
  certificaciones: string[];

  @OneToMany(() => Vuelo, (vuelo) => vuelo.piloto)
  vuelosPiloto: Vuelo[];

  @OneToMany(() => Vuelo, (vuelo) => vuelo.coopiloto)
  vuelosCopiloto: Vuelo[];

  @Column({ nullable: false, type: 'timestamp' })
  fechaExpedicionLicencia: Date;
}
