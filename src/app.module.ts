import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-mute-grass-a5yv0kt7-pooler.us-east-2.aws.neon.tech',
      port: 5432,
      username: 'neondb_owner',
      password: 'I8l0nUFHumXy',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        ssl: true,
        sslmode: 'require',
      },
    }),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
