import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { VuelosModule } from 'src/resource/vuelos/vuelos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { TransaccionModule } from 'src/common/transaction/transaccion.module';
import { TransaccionService } from 'src/common/transaction/transaccion.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva]),  ScheduleModule.forRoot(),],
  controllers: [ReservaController],
  providers: [ReservaService, TransaccionService],
  exports: [ReservaService],
})
export class ReservaModule {}
