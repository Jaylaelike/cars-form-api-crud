import { Test, TestingModule } from '@nestjs/testing';
import { CarsformController } from './carsform.controller';
import { CarsformService } from './carsform.service';

describe('CarsformController', () => {
  let controller: CarsformController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsformController],
      providers: [CarsformService],
    }).compile();

    controller = module.get<CarsformController>(CarsformController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
