import { IsString, Length } from 'class-validator';

export class UpdateUserDto {
    @IsString()
    @Length(6, 20)
    password?: string;
}
