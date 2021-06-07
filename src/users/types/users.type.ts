import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TUser{
    @Field({ nullable: true })
    id: number;

    @Field()
    name: string;
}
