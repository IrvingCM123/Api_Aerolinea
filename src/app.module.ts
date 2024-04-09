import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CuentasModule } from './resource/cuentas/cuentas.module';
import { UsuarioModule } from './resource/usuario/usuario.module';
import * as dotenv from 'dotenv';

const dotenv_Config = require('dotenv').config();
const host = dotenv_Config.parsed.PG_HOST;
const database = dotenv_Config.parsed.PG_DATABASE;
const user = dotenv_Config.parsed.PG_USER;
const password = dotenv_Config.parsed.PG_PASSWORD;
const end_Point_Develop = dotenv_Config.parsed.ENDPOINT_ID_DEVELOP;
const end_Point_Production = dotenv_Config.parsed.ENDPOINT_ID_PRODUCTION;

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: host,
      port: 5432,
      username: user,
      password: password,
      database: database,
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        ssl: true,
        sslmode: 'require',
        connection: {
          options: `project=${end_Point_Develop}`,
        },
      },
      
    }),
    AuthModule,
    CuentasModule,
    UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
