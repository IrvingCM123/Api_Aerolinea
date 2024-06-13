import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Viaje } from '../viajes/entities/viaje.entity';
import { Boleto } from './entities/boleto.entity';
import { TransaccionModule } from 'src/common/transaction/transaccion.module';
import { BoletosController } from './boleto.controller';
import { BoletosService } from './boleto.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Boleto, Usuario, Viaje]),
    TransaccionModule,
  ],
  controllers: [BoletosController],
  providers: [BoletosService],
  exports: [BoletosService],
})
export class BoletosModule {}
