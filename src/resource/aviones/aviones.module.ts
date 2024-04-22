import { Module } from '@nestjs/common';
import { AvionesService } from './aviones.service';
import { AvionesController } from './aviones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avion } from './entities/avion.entity';
import { ModeloAvion } from '../modelos/entities/modelo.entity';
import { Fabricante } from '../fabricantes/entities/fabricante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Avion, ModeloAvion, Fabricante])],
  controllers: [AvionesController],
  providers: [AvionesService],
  exports: [AvionesService],
})
export class AvionesModule {}
