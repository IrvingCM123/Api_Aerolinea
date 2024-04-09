import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Error_Registro } from 'src/common/helpers/registro.helpers';
import { Cuenta } from 'src/resource/cuentas/entities/cuenta.entity';

@Entity()
export class Usuario {
    
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({ nullable: false })
    usuario_Nombre: string;

    @Column({ nullable: false })
    usuario_Apellidos: string;

    @Column({ nullable: false })
    usuario_Edad: number;

    @Column({ nullable: false })
    usuario_Telefono: string;
}

