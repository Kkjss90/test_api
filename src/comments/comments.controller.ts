import { Controller, Post, Get, Param, Put, Delete, Body } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { UpdateCommentDto } from './dtos/update-comment.dto';
import { Comment } from './comment.entity';

@Controller('comments')
export class CommentsController {
    constructor(private commentsService: CommentsService) {}

    @Post()
    create(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
        return this.commentsService.create(createCommentDto);
    }

    @Get()
    findAll(): Promise<Comment[]> {
        return this.commentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Comment> {
        return this.commentsService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateCommentDto: UpdateCommentDto,
    ): Promise<Comment> {
        return this.commentsService.update(id, updateCommentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.commentsService.remove(id);
    }
}
