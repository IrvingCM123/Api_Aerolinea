import { PartialType } from '@nestjs/mapped-types';
import { CreateCuentaDto } from './create-cuenta.dto';

import {
    IsNotEmpty,
    IsString,
    Matches,
    MaxLength,
    MinLength,
    IsEnum
} from 'class-validator';

import { Transform } from 'class-transformer';
import { Roles } from 'src/common/enums/roles.enum';
import { Errores_Enum } from 'src/common/helpers/enums.helpers';
import { Usuario } from 'src/resource/usuario/entities/usuario.entity';

export class UpdateCuentaDto extends PartialType(CreateCuentaDto) {
    
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

    @IsNotEmpty()
    @IsString()
    @IsEnum(Roles, { message: Errores_Enum.ENUMS_DISPONIBLES } )
    estado_cuenta: string;

    @IsString()
    rol : string;

    @IsNotEmpty()
    id_usuario?: Usuario;

}
