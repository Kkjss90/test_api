import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';
import { CreateCardDto } from './dtos/create-card.dto';
import { UpdateCardDto } from './dtos/update-card.dto';

@Injectable()
export class CardsService {
    constructor(
        @InjectRepository(Card)
        private cardsRepository: Repository<Card>,
    ) {}

    async create(createCardDto: CreateCardDto): Promise<Card> {
        const card = this.cardsRepository.create(createCardDto);
        return this.cardsRepository.save(card);
    }

    async findAll(): Promise<Card[]> {
        return this.cardsRepository.find();
    }

    async findOne(id: number): Promise<Card> {
        return this.cardsRepository.findOneBy({ id });
    }

    async update(id: number, updateCardDto: UpdateCardDto): Promise<Card> {
        await this.cardsRepository.update(id, updateCardDto);
        return this.cardsRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.cardsRepository.delete(id);
    }
}
