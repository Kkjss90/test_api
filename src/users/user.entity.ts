import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Columns as TrelloColumn } from '../columns/column.entity';
import { Comment } from '../comments/comment.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToMany(() => TrelloColumn, column => column.user)
    columns: TrelloColumn[];

    @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[];
}
