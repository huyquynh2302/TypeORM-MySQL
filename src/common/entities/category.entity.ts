import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import {Book} from './book.entity'

@Entity('category')
export class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @ManyToMany(() => Book)
    @JoinTable({ name: 'book_of_category' })
    book: Book[];
}