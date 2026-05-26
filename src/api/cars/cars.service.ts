import { Injectable, NotFoundException } from '@nestjs/common';
import { CarsRepository } from './cars.repository';
import { CreateCarDto } from './cars.create.dto';

@Injectable()
export class CarsService {
    constructor(private readonly repo:CarsRepository) {}

    async findAll() {
        return this.repo.findAll();
    }

    async findById( id: number) {
        const car = await this.repo.findById(id);
        if(!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return car;
    }

    async create(carDto: CreateCarDto) {
        return this.repo.create(carDto);
    }

    async delete( id: number) {
        const car = await this.repo.findById(id);
        if(!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return this.repo.delete(car.id);
    }
}
