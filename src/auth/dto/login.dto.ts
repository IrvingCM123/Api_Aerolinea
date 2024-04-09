import { Transform } from 'class-transformer';

import {
    IsEmail,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator';

export class LoginDto {
    @IsEmail()
    identificador: string;

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Transform(({ value }) => value.trim())
    contraseña: string;
}
