import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Tarjeta_Estado } from "src/common/enums/tarjeta.enum";

export class Tarjeta {

    @PrimaryGeneratedColumn()
    id_Tarjeta: number;
    
    @Column({nullable: false})
    tarjeta_Titular: string;

    @Column({nullable: false})
    tarjeta_Direccion: string;

    @Column({nullable: false})
    tarjeta_Numero_Tarjeta: string;

    @Column({nullable: false})
    tarjeta_Fecha_Vencimiento: string;

    @Column({nullable: false, type: 'enum', enum: Tarjeta_Estado })
    tarjeta_Status: string;
}
