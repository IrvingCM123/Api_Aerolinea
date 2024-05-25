import { Module } from '@nestjs/common';
import { ViajesService } from './viajes.service';
import { ViajesController } from './viajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Viaje } from './entities/viaje.entity';
import { TransaccionModule } from 'src/common/transaction/transaccion.module';
import { UbicacionesModule } from '../ubicaciones/ubicaciones.module';
import { TarifaClaseViajes } from './entities/tarifasclase-viaje.entity';
import { TarifaDistanciaViajes } from './entities/tarifadistancia-viajes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Viaje, TarifaClaseViajes, TarifaDistanciaViajes]), TransaccionModule, UbicacionesModule],
  controllers: [ViajesController],
  providers: [ViajesService],
  exports: [ViajesService,],
})
export class ViajesModule { }
