import { Transform } from 'class-transformer';
import {
    IsNotEmpty,
    IsString,
    Matches,
    MaxLength,
    MinLength,
    IsNumber,
    Max,
    Min,
    IsOptional
} from 'class-validator';

import { Error_Registro } from 'src/common/helpers/registro.helpers';

export class RegisterDto {

    @IsNotEmpty()
    @Matches(/^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3})$/) // Expresión regular combinada para correo electrónico o identificador
    identificador: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Transform(({ value }) => value.trim())
    contraseña : string;

    @IsString()
    @IsOptional()
    rol : string;

    @IsString()
    @MaxLength(50)
    usuario_Nombre: string;

    @IsString()
    @MaxLength(50)
    usuario_Apellidos: string;

    @IsNumber()
    @Max(120, { message: Error_Registro.EDAD_MAXIMA })
    @Min(18, { message: Error_Registro.EDAD_MINIMA })
    @IsOptional()
    usuario_Edad: number;

    @Matches(/^(\d{3})-(\d{3})-(\d{4})$/, {
        message: Error_Registro.FORMATO_TELEFONO,
    })
    @MaxLength(12)
    @IsOptional()
    usuario_Telefono: string;

}
