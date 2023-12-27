import { Injectable } from '@nestjs/common';

import { UpdateLicenseDto } from './dto/update-license.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { License } from './entities/license.entity';

@Injectable()
export class LicenseService {
  constructor(
    @InjectRepository(License)
    private licenseRepository: Repository<License>,
  ) {}

  async findByCar(Car: string) {
    const license = await this.licenseRepository.findBy({ Car: Car });
    return license;
  }
  async findOne(id: number) {
    const license = await this.licenseRepository.findOneBy({ id: id });
    if (!license) {
      return {
        message: 'Not found id',
        event: `The id:${id} has no data`,
      };
    }
    return license;
  }

  findAll(): Promise<License[]> {
    return this.licenseRepository.createQueryBuilder('license').getMany();
  }

  async update(Car: string, updateLicenseDto: UpdateLicenseDto) {
    let license = await this.licenseRepository.findOneBy({ Car: Car });
    if (!license) {
      return `The id:${Car} has no data`;
    }
    license = {
      ...license,
      ...updateLicenseDto,
    };
    const result = await this.licenseRepository.save(license);
    return {
      status: 200,
      message: 'ok',
      event: `This action update a license id : ${result.Car}`,
      data: result,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} license`;
  }
}
