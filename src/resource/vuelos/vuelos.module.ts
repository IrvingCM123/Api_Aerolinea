import { Module } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { VuelosController } from './vuelos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vuelo } from './entities/vuelo.entity';
import { HistViajeVuelos } from './entities/vuelo-historial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vuelo, HistViajeVuelos])],
  controllers: [VuelosController],
  providers: [VuelosService],
  exports: [VuelosService],
})
export class VuelosModule {}
