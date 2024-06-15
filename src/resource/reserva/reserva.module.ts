import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { Reserva } from './entities/reserva.entity';
import { BoletosService } from '../boleto/boleto.service';
import { Boleto } from '../boleto/entities/boleto.entity';
import { TransaccionService } from 'src/common/transaction/transaccion.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reserva, Boleto]),
  ],
  controllers: [ReservaController],
  providers: [ReservaService, BoletosService, TransaccionService],
  exports: [ReservaService],
})
export class ReservaModule {}
