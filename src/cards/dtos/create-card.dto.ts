import { IsString, IsInt } from 'class-validator';

export class CreateCardDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsInt()
    columnId: number;
}
