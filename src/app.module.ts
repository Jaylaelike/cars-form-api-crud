import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsformModule } from './carsform/carsform.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Carsform } from './carsform/entities/carsform.entity';
import { License } from './license/entities/license.entity';
import { LicenseModule } from './license/license.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '10.0.1.225',
      port: 3306,
      username: 'thaipbs',
      password: 'thaipbs',
      database: 'online_reporting',
      entities: [Carsform, License],
      synchronize: true,
    }),
    CarsformModule,
    LicenseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
