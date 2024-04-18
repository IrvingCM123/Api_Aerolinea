import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CuentasModule } from './resource/cuentas/cuentas.module';
import { UsuarioModule } from './resource/usuario/usuario.module';
import { ClientModule } from './client/client.module';
import { TransaccionModule } from './common/transaction/transaccion.module';
import { ClienteModule } from './resource/cliente/cliente.module';
import { TarjetaModule } from './resource/tarjeta/tarjeta.module';

const dotenv_Config = require('dotenv').config();
const secret = dotenv_Config.parsed;
const host_develop = dotenv_Config.parsed.PG_HOST_DEVELOP;
const host_production = dotenv_Config.parsed.PG_HOST_PRODUCTION;
const database = dotenv_Config.parsed.PG_DATABASE;
const user = dotenv_Config.parsed.PG_USER;
const user_develop = dotenv_Config.parsed.PG_USER_DEVELOP;
const password = dotenv_Config.parsed.PG_PASSWORD;
const password_develop = dotenv_Config.parsed.PG_PASSWORD_DEVELOP;

const host_local = secret.PG_HOST_LOCAL
const database_local = secret.PG_DATABASE_LOCAL
const user_local = secret.PG_USER_LOCAL
const password_local = secret.PG_PASSWORD_LOCAL
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: host_develop,
      port: 5432,
      username: user,
      password: password,
      database: database,
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        ssl: true,
        sslmode: 'require',
      },
    }),
    AuthModule,
    CuentasModule,
    UsuarioModule,
    ClientModule,
    TransaccionModule,
    ClienteModule,
    TarjetaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
