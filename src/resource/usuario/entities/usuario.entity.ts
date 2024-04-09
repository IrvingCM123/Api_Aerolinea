import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, OneToMany } from 'typeorm';

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({ nullable: false })
    usuario_Nombre: string;

    @Column({ nullable: false })
    usuario_Apellidos: string;
    
    @Column({ nullable: false })
    usuario_Edad: string;

    @Column({ nullable: false })
    usuario_Telefono: string;

}
