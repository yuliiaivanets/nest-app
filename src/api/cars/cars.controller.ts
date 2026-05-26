import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { type CreateCarDto, CreateCarSchema } from './cars.create.dto';
import { CarsService } from './cars.service';

@Controller('api/cars')
export class CarsController {
  constructor(private readonly service: CarsService) {}
  @Get()
  getAllCars() {
    return this.service.findAll();
  }

  @Get('/:id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
  
  @Post()
  createCar(@Body(new ZodValidationPipe(CreateCarSchema)) dto: CreateCarDto) {
    return this.service.create(dto);
  }
}
