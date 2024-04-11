import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CuentasModule } from './resource/cuentas/cuentas.module';
import { UsuarioModule } from './resource/usuario/usuario.module';
import { ClientModule } from './client/client.module';

const dotenv_Config = require('dotenv').config();
const host_develop = dotenv_Config.parsed.PG_HOST_DEVELOP;
const host_production = dotenv_Config.parsed.PG_HOST_PRODUCTION;
const database = dotenv_Config.parsed.PG_DATABASE;
const user = dotenv_Config.parsed.PG_USER;
const password = dotenv_Config.parsed.PG_PASSWORD;

const host_local = dotenv_Config.parsed.PG_HOST_LOCAL;
const database_local = dotenv_Config.parsed.PG_DATABASE_LOCAL;
const user_local = dotenv_Config.parsed.PG_USER_LOCAL;
const password_local = dotenv_Config.parsed.PG_PASSWORD_LOCAL;

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: host_local,
      port: 5432,
      username: user_local,
      password: password_local,
      database: database_local,
      autoLoadEntities: true,
      synchronize: true,
      //extra: {
      //  ssl: true,
      //  sslmode: 'require',
      //},
      
    }),
    AuthModule,
    CuentasModule,
    UsuarioModule,
    ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
