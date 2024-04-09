import { Transform } from 'class-transformer';
import {
    IsNotEmpty,
    IsString,
    Matches,
    MaxLength,
    MinLength,
    IsNumber
} from 'class-validator';
import { Usuario } from 'src/resource/usuario/entities/usuario.entity';

export class CreateCuentaDto {

    @IsNotEmpty()
    @Matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) //Formato de llenado de correo: Irving.Conde123@gmail.com
    @Matches(/^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$/) //Formato de llenado de identificador: ABC-123-ABC
    identificador: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Transform(({ value }) => value.trim())
    contraseña : string;

    @IsString()
    rol : string;

    @IsNumber()
    id_usuario: Usuario;
}
