import { Module } from '@nestjs/common';
import { UsuarioAdminService } from './usuario_admin.service';
import { UsuarioAdminController } from './usuario_admin.controller';

@Module({
  controllers: [UsuarioAdminController],
  providers: [UsuarioAdminService]
})
export class UsuarioAdminModule {}
