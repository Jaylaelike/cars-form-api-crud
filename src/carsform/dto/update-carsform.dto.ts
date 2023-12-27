import { PartialType } from '@nestjs/mapped-types';
import { CreateCarsformDto } from './create-carsform.dto';

export class UpdateCarsformDto extends PartialType(CreateCarsformDto) {}
