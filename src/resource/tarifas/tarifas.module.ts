import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarifaClase } from './entities/tarifa-clase.entity';
import { TarifaDistancia } from './entities/tarifa-distancia.entity';
import { TarifaClaseController } from './controller/tarifa-clase.controller';
import { TarifaDistanciaController } from './controller/tarifa-distancia.controller';
import { TarifaClaseService } from './services/tarifa-clase.service';
import { TarifaDistanciaService } from './services/tarifa-distancia.service';
import { TransaccionModule } from 'src/common/transaction/transaccion.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TarifaClase, TarifaDistancia]),
    TransaccionModule,
  ],
  controllers: [TarifaClaseController, TarifaDistanciaController],
  providers: [TarifaClaseService, TarifaDistanciaService],
  exports: [TarifaClaseService, TarifaDistanciaService],
})
export class TarifasModule {}
