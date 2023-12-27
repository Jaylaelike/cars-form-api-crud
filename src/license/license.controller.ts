import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { LicenseService } from './license.service';
// import { CreateLicenseDto } from './dto/create-license.dto';
import { UpdateLicenseDto } from './dto/update-license.dto';

@Controller('license')
export class LicenseController {
  constructor(private readonly licenseService: LicenseService) {}

  // @Post()
  // create(@Body() createLicenseDto: CreateLicenseDto) {
  //   return this.licenseService.create(createLicenseDto);
  // }
  @Get()
  findAll() {
    return this.licenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.licenseService.findOne(+id);
  }

  @Get('bycars/:Car')
  findByCar(@Param('Car') Car: string) {
    return this.licenseService.findByCar(Car);
  }

  @Patch(':Car')
  update(
    @Param('Car') Car: string,
    @Body() updateLicenseDto: UpdateLicenseDto,
  ) {
    return this.licenseService.update(Car, updateLicenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licenseService.remove(+id);
  }
}
