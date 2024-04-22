import { Module } from '@nestjs/common';
import { FabricantesService } from './fabricantes.service';
import { FabricantesController } from './fabricantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fabricante } from './entities/fabricante.entity';
import { ModeloAvion } from '../modelos/entities/modelo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fabricante, ModeloAvion])],
  controllers: [FabricantesController],
  providers: [FabricantesService],
  exports: [FabricantesService],
})
export class FabricantesModule {}
