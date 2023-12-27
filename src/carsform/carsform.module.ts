import { Module } from '@nestjs/common';
import { CarsformService } from './carsform.service';
import { CarsformController } from './carsform.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Carsform } from './entities/carsform.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carsform])],
  controllers: [CarsformController],
  providers: [CarsformService],
})
export class CarsformModule {}
