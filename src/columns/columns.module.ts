import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnsController } from './columns.controller';
import { Columns } from './column.entity';
import { UsersModule } from '../users/users.module';
import { ColumnsService } from './columns.service';

@Module({
    imports: [TypeOrmModule.forFeature([Columns]), UsersModule],
    providers: [ColumnsService],
    controllers: [ColumnsController],
})
export class ColumnsModule {}
