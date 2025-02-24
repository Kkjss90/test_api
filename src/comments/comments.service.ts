import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { UpdateCommentDto } from './dtos/update-comment.dto';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment)
        private commentsRepository: Repository<Comment>,
    ) {}

    async create(createCommentDto: CreateCommentDto): Promise<Comment> {
        const comment = this.commentsRepository.create(createCommentDto);
        return this.commentsRepository.save(comment);
    }

    async findAll(): Promise<Comment[]> {
        return this.commentsRepository.find();
    }

    async findOne(id: number): Promise<Comment> {
        return this.commentsRepository.findOneBy({ id });
    }

    async update(id: number, updateCommentDto: UpdateCommentDto): Promise<Comment> {
        await this.commentsRepository.update(id, updateCommentDto);
        return this.commentsRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.commentsRepository.delete(id);
    }
}
