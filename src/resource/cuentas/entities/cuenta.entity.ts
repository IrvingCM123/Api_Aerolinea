import { Usuario } from 'src/resource/usuario/entities/usuario.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn
} from 'typeorm';

import { Estado } from 'src/common/enums/cuentas.enum'
import { Roles } from 'src/common/enums/roles.enum';

@Entity()
export class Cuenta {

    @PrimaryGeneratedColumn()
    id_cuenta: number;

    @Column({ unique: true, nullable: false })
    identificador: string;

    @Column({ nullable: false })
    contraseña: string;

    @Column({ type: 'enum', default: Estado.PENDIENTE, enum: Estado, nullable: true })
    estado_cuenta: string;

    @Column({ nullable: false, enum: Roles, default: Roles.USUARIO})
    rol: string;

    @OneToOne(() => Usuario , (usuario) => usuario.cuenta, { eager: true })
    @JoinColumn()
    usuario: Usuario; 
}
