import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Columns as TrelloColumn } from '../columns/column.entity';
import { Comment } from '../comments/comment.entity';

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(() => TrelloColumn, column => column.cards)
    column: TrelloColumn;

    @OneToMany(() => Comment, comment => comment.card)
    comments: Comment[];
}
