import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn  } from "typeorm";

@Entity('user')
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}