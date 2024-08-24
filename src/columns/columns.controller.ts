import { Controller, Post, Get, Param, Put, Delete, Body } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { CreateColumnDto } from './dtos/create-column.dto';
import { UpdateColumnDto } from './dtos/update-column.dto';
import { Columns } from './column.entity';

@Controller('columns')
export class ColumnsController {
    constructor(private columnsService: ColumnsService) {}

    @Post()
    create(@Body() createColumnDto: CreateColumnDto): Promise<Columns> {
        return this.columnsService.create(createColumnDto);
    }

    @Get()
    findAll(): Promise<Columns[]> {
        return this.columnsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Columns> {
        return this.columnsService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateColumnDto: UpdateColumnDto,
    ): Promise<Columns> {
        return this.columnsService.update(id, updateColumnDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.columnsService.remove(id);
    }
}
