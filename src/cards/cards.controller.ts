import { Controller, Post, Get, Param, Put, Delete, Body } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dtos/create-card.dto';
import { UpdateCardDto } from './dtos/update-card.dto';
import { Card } from './card.entity';

@Controller('cards')
export class CardsController {
    constructor(private cardsService: CardsService) {}

    @Post()
    create(@Body() createCardDto: CreateCardDto): Promise<Card> {
        return this.cardsService.create(createCardDto);
    }

    @Get()
    findAll(): Promise<Card[]> {
        return this.cardsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Card> {
        return this.cardsService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateCardDto: UpdateCardDto,
    ): Promise<Card> {
        return this.cardsService.update(id, updateCardDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.cardsService.remove(id);
    }
}
