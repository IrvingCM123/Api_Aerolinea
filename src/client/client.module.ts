import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { CuentasModule } from 'src/resource/cuentas/cuentas.module';

@Module({
  imports: [CuentasModule],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
