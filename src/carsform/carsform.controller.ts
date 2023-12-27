import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarsformService } from './carsform.service';
import { CreateCarsformDto } from './dto/create-carsform.dto';
import { UpdateCarsformDto } from './dto/update-carsform.dto';

@Controller('carsform')
export class CarsformController {
  constructor(private readonly carsformService: CarsformService) {}

  @Post()
  create(@Body() createCarsformDto: CreateCarsformDto) {
    return this.carsformService.create(createCarsformDto);
  }

  @Get()
  findAll() {
    return this.carsformService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsformService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCarsformDto: UpdateCarsformDto,
  ) {
    return this.carsformService.update(+id, updateCarsformDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsformService.remove(+id);
  }
}
