import { IsString } from 'class-validator';

export class UpdateCardDto {
    @IsString()
    title?: string;

    @IsString()
    description?: string;
}
