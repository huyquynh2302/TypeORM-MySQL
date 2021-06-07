import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import { User } from './user.entity';
import { Category } from './category.entity';

@Entity('book')
export class Book{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @ManyToMany(() => Category)
    @JoinTable({ name: 'book_of_category' })
    category: Category[];
}