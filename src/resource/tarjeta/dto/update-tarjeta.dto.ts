import { PartialType } from '@nestjs/mapped-types';
import { CreateTarjetaDto } from './create-tarjeta.dto';

import { IsNumber, IsString, Matches } from "class-validator";
import { Error_Registro } from "src/common/helpers/registro.helpers";

export class UpdateTarjetaDto extends PartialType(CreateTarjetaDto) {

    @IsString()
    usuario_Tarjeta_Titular: string;

    @IsString()
    usuario_Tarjeta_Direccion: string;

    @IsNumber()
    usuario_Tarjeta_Numero_Tarjeta: string;

    @IsString()
    @Matches(/^(\d{2})-(\d{2})$/, {
        message: Error_Registro.FECHA_VENCIMIENTO,
    })
    usuario_Tarjeta_Fecha_Vencimiento: string;

}
