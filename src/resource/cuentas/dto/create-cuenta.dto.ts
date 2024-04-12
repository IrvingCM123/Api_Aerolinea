import { Transform } from 'class-transformer';
import {
    IsNotEmpty,
    IsString,
    Matches,
    MaxLength,
    MinLength,
    IsNumber,
    IsOptional
} from 'class-validator';
import { Usuario } from 'src/resource/usuario/entities/usuario.entity';

export class CreateCuentaDto {

    @IsNotEmpty()
    // Formato de correo electrónico Irving@gmail.com, formato de identificador ABC-4SD-78A
    @Matches(/^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3})$/) // Expresión regular combinada para correo electrónico o identificador
    identificador: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Transform(({ value }) => value.trim())
    contraseña : string;

    @IsString()
    rol : string;

    @IsOptional()
    estado_cuenta: string;

    @IsNumber()
    id_usuario: Usuario;

    @IsOptional()
    @Matches(/^(?:[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3})$/) // Expresión regular del identificador
    @Transform(({ value }) => value.trim())
    numero_activacion: string;
}
