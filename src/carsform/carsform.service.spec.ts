import { Test, TestingModule } from '@nestjs/testing';
import { CarsformService } from './carsform.service';

describe('CarsformService', () => {
  let service: CarsformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsformService],
    }).compile();

    service = module.get<CarsformService>(CarsformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
