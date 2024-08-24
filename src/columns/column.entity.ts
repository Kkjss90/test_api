import { User } from '../users/user.entity';
import { Card } from '../cards/card.entity';
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Columns {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => User, user => user.columns)
    user: User;

    @OneToMany(() => Card, card => card.column)
    cards: Card[];
}
