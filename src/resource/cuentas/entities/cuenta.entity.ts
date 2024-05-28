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
import { Tarjeta } from 'src/resource/tarjeta/entities/tarjeta.entity';

@Entity()
export class Cuenta {

    @PrimaryGeneratedColumn()
    id_Cuenta?: number;

    @Column({ unique: true, nullable: false })
    cuenta_Identificador: string;

    @Column({ nullable: false })
    cuenta_Contraseña: string;

    @Column({ type: 'enum', default: Estado.PENDIENTE, enum: Estado, nullable: true })
    cuenta_Estado_Cuenta?: string;

    @Column({ nullable: false, enum: Roles, default: Roles.USUARIO })
    cuenta_Rol?: string;

    @Column()
    @OneToOne(() => Usuario, { eager: true })
    @JoinColumn({ name: 'id_Usuario' })
    id_Usuario?: Usuario;

    @Column({ nullable: true })
    cuenta_Numero_Activacion?: string;

    @Column({ nullable: true })
    cuenta_Codigo_Recuperacion?: string;

    @Column({ nullable: true })
    cuenta_Fecha_Registro?: string;

    @Column({ nullable: true })
    @OneToOne(() => Tarjeta, { eager: true })
    @JoinColumn({ name: 'id_Tarjeta' })
    id_Tarjeta?: Tarjeta;
}
