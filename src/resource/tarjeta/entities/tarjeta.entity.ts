import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Tarjeta {

    @PrimaryGeneratedColumn()
    id_Usuario: number;
    
    @Column({nullable: false})
    tarjeta_Titular: string;

    @Column({nullable: false})
    tarjeta_Direccion: string;

    @Column({nullable: false})
    tarjeta_Numero_Tarjeta: string;

    @Column({nullable: false})
    tarjeta_Fecha_Vencimiento: string;
}
