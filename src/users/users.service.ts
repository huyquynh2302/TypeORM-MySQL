import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
    Repository
} from 'typeorm';
import { User } from '../common/entities/user.entity'
import { CreateUser } from './dto/create-user.input';



@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly _userRepository: Repository<User>,
    ) {}

    async createUser(createUser: CreateUser): Promise<User> {
        const {name} = createUser;
        const user = this._userRepository.create({
            name
        })
        await this._userRepository.save(user);
        return user;
    }

    async findAll(){
        return this._userRepository.find();
    }
    
    async findByName(name: string): Promise<User>{
        return this._userRepository.findOne({name});
    }

}
