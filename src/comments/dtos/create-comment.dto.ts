import { IsString, IsInt } from 'class-validator';

export class CreateCommentDto {
    @IsString()
    content: string;

    @IsInt()
    cardId: number;

    @IsInt()
    userId: number;
}
