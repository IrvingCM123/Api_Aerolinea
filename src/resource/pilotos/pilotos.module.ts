import { Module } from '@nestjs/common';
import { PilotosService } from './pilotos.service';
import { PilotosController } from './pilotos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Piloto } from './entities/piloto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Piloto])],
  controllers: [PilotosController],
  providers: [PilotosService],
  exports: [PilotosService],
})
export class PilotosModule {}
