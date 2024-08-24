import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsController } from './comments.controller';
import { Comment } from './comment.entity';
import { CardsModule } from '../cards/cards.module';
import { CommentsService } from './comments.service';

@Module({
    imports: [TypeOrmModule.forFeature([Comment]), CardsModule],
    providers: [CommentsService],
    controllers: [CommentsController],
})
export class CommentsModule {}
