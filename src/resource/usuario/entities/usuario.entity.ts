import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { IsString, MaxLength, IsNumber, Min, Max, Matches } from 'class-validator';
import { Error_Registro } from 'src/common/helpers/registro.helpers';
import { Cuenta } from 'src/resource/cuentas/entities/cuenta.entity';

// Decorador personalizado para validar el formato del teléfono
function IsTelefonoValido() {
    return Matches(/^(\d{3})-(\d{3})-(\d{4})$/, {
        message: Error_Registro.FORMATO_TELEFONO,
    });
}

@Entity()
export class Usuario {
    
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({ nullable: false })
    @IsString()
    @MaxLength(50)
    usuario_Nombre: string;

    @Column({ nullable: false })
    @IsString()
    @MaxLength(50)
    usuario_Apellidos: string;

    @Column({ nullable: false })
    @IsNumber()
    @Max(120)
    @Min(18)
    usuario_Edad: number;

    @Column({ nullable: false })
    @IsString()
    @MaxLength(12)
    @IsTelefonoValido()
    usuario_Telefono: string;

    @Column() 
    @OneToOne(() => Cuenta, cuenta => cuenta.usuario)
    cuenta: Cuenta;
}

