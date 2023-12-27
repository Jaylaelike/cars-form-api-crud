import { Injectable } from '@nestjs/common';
import { CreateCarsformDto } from './dto/create-carsform.dto';
import { UpdateCarsformDto } from './dto/update-carsform.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Carsform } from './entities/carsform.entity';

@Injectable()
export class CarsformService {
  constructor(
    @InjectRepository(Carsform)
    private carsFormRepository: Repository<Carsform>,
  ) {}

  async create(createCarsformDto: CreateCarsformDto) {
    const carsform = await this.carsFormRepository.create(createCarsformDto);
    const result = await this.carsFormRepository.save(carsform);
    return {
      status: 200,
      message: 'ok',
      event: `This action adds a new carsform ${result.id}`,
      data: result,
    };
  }
  // create(createCarsformDto: CreateCarsformDto) {
  //   console.log(createCarsformDto);

  //   return 'This action adds a new carsform';
  // }

  findAll(): Promise<Carsform[]> {
    return this.carsFormRepository.createQueryBuilder('carsform').getMany();
  }

  async findOne(id: number) {
    const carsform = await this.carsFormRepository.findOneBy({ id: id });
    if (!carsform) {
      return {
        message: 'Not found id',
        event: `The id:${id} has no data`,
      };
    }
    return carsform;
  }

  async update(id: number, updateCarsformDto: UpdateCarsformDto) {
    let carsform = await this.carsFormRepository.findOneBy({ id: id });
    if (!carsform) {
      return `The id:${id} has no data`;
    }
    carsform = {
      ...carsform,
      ...updateCarsformDto,
    };
    const result = await this.carsFormRepository.save(carsform);
    return {
      status: 200,
      message: 'ok',
      event: `This action update a carsform id : ${result.id}`,
      data: result,
    };
  }
  // update(id: number, updateCarsformDto: UpdateCarsformDto) {
  //   return `This action updates a #${id} carsform`;
  // }

  async remove(id: number) {
    const toDelete = await this.carsFormRepository.delete(id);
    if (toDelete.affected === 0) {
      return {
        status: 404,
        message: 'Not found',
        event: `This action removes a #${id} carsform`,
      };
    } else {
      return {
        status: 200,
        message: 'ok',
        event: `This action removes a #${id} carsform`,
      };
    }
  }
}
