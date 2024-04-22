import { Module } from '@nestjs/common';
import { TripulacionesService } from './tripulaciones.service';
import { TripulacionesController } from './tripulaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tripulacion } from './entities/tripulacion.entity';
import { TripulacionTrabajador } from './entities/tripulacion-trabajadores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tripulacion, TripulacionTrabajador])],
  controllers: [TripulacionesController],
  providers: [TripulacionesService],
  exports: [TripulacionesService],
})
export class TripulacionesModule {}
