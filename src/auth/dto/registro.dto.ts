
import { Transform } from 'class-transformer';
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength,
    Matches,
} from 'class-validator';

import { Error_Registro } from 'src/common/helpers/registro.helpers';

export class RegisterDto {

    @IsNotEmpty()
    @IsEmail()
    email : string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Transform(({ value }) => value.trim())
    password : string;

    @IsString()
    name: string;

    @IsString()
    lastname: string;

    @Matches(/^(\d{3})-(\d{3})-(\d{4})$/, {
        message: Error_Registro.FORMATO_TELEFONO,
    })
    @MaxLength(12)
    phone: string;

    @IsString()
    address: string;

    @IsString()
    token_notificacion?: string;
}
