import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsController } from './cards.controller';
import { Card } from './card.entity';
import { ColumnsModule } from '../columns/columns.module';
import { CardsService } from './cards.service';

@Module({
    imports: [TypeOrmModule.forFeature([Card]), ColumnsModule],
    providers: [CardsService],
    controllers: [CardsController],
})
export class CardsModule {}
