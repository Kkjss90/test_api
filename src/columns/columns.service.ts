import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Columns } from './column.entity';
import { CreateColumnDto } from './dtos/create-column.dto';
import { UpdateColumnDto } from './dtos/update-column.dto';

@Injectable()
export class ColumnsService {
    constructor(
        @InjectRepository(Columns)
        private columnsRepository: Repository<Columns>,
    ) {}

    async create(createColumnDto: CreateColumnDto): Promise<Columns> {
        const column = this.columnsRepository.create(createColumnDto);
        return this.columnsRepository.save(column);
    }

    async findAll(): Promise<Columns[]> {
        return this.columnsRepository.find();
    }

    async findOne(id: number): Promise<Columns> {
        return this.columnsRepository.findOneBy({ id });
    }

    async update(id: number, updateColumnDto: UpdateColumnDto): Promise<Columns> {
        await this.columnsRepository.update(id, updateColumnDto);
        return this.columnsRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.columnsRepository.delete(id);
    }
}
