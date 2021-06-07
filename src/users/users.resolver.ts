import { Resolver, Mutation, Args,Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { TUser } from './types/users.type';
import { CreateUser } from './dto/create-user.input';

@Resolver()
export class UsersResolver {
    constructor(private readonly usersService: UsersService) { }
    
    @Mutation(() => TUser)
    createUser(@Args('userCreate') userCreate: CreateUser): Promise<TUser>{
        return this.usersService.createUser(userCreate);
    }

    @Query(() => [TUser])
    findAll() {
        return this.usersService.findAll();
    } 

    @Query(() => TUser)
    findByName(@Args('name') name: string): Promise<TUser>{
        return this.usersService.findByName(name)
    }

    

}
