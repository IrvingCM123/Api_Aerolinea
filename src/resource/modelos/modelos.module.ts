import { Module } from '@nestjs/common';
import { ModelosService } from './modelos.service';
import { ModelosController } from './modelos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloAvion } from './entities/modelo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ModeloAvion])],
  controllers: [ModelosController],
  providers: [ModelosService],
  exports: [ModelosService],
})
export class ModelosModule {}
