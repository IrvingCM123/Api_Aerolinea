import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column({ nullable: false, length: 30 })
  certificaciones: string;

  @Column({ nullable: false, type: 'timestamp' })
  fechaExpedicionLicencia: Date;
}
