import { Module } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { VuelosController } from './vuelos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vuelo } from './entities/vuelo.entity';
import { TransaccionModule } from 'src/common/transaction/transaccion.module';
import { ReservaModule } from 'src/reserva/reserva.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vuelo]), TransaccionModule, ReservaModule],
  controllers: [VuelosController],
  providers: [VuelosService],
  exports: [VuelosService],
})
export class VuelosModule {}
