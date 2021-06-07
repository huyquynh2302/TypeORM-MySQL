import { Field, InputType, OmitType } from '@nestjs/graphql';
import { TUser } from '../types/users.type';

@InputType()
export class CreateUser extends OmitType(
    TUser,
    ['name'],
    InputType,
) {
    @Field()
    name: string;
}