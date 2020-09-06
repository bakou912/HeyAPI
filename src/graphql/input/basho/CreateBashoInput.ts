import { GraphQLString } from "graphql";
import { Basho } from "../../../entity/object/Basho";
import { HonBasho } from "../../../constant/HonBasho";
import { IsDateString, IsIn, MaxLength, Min } from "class-validator";
import { Field, GraphQLISODateTime, InputType, Int } from "type-graphql";

@InputType()
export class CreateBashoInput implements Partial<Basho> {
    @IsIn(Object.values(HonBasho))
    @Field(() => GraphQLString)
    name!: HonBasho;

    @MaxLength(255)
    @Field(() => GraphQLString)
    location!: string;

    @Min(1)
    @Field(() => Int, { nullable: true })
    winnerId?: number;

    @IsDateString()
    @Field(() => GraphQLString)
    startDate!: string;

    @IsDateString()
    @Field(() => GraphQLString, { nullable: true })
    endDate?: string;
}