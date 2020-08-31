import { Basho } from "./Basho";
import { BaseObjectType } from "./BaseObjectType";
import { Rikishi } from "./rikishi/Rikishi";
import { Kimarite } from "../../../constant/Kimarite";
import { Field, ObjectType, Int, GraphQLISODateTime } from "type-graphql";

@ObjectType({ description: "The Bout model" })
export class Bout extends BaseObjectType {

    opponentId1!: number;
    opponentId2!: number;
    winnerId!: number;
    bashoId!: number;

    @Field(type => GraphQLISODateTime)
    date!: Date;

    @Field(type => Int)
    bashoDay!: number;

    @Field(type => Int)
    order!: number;

    @Field(type => Basho)
    basho!: Basho;

    @Field(type => [Rikishi]!)
    opponents!: Rikishi[];

    @Field(type => Rikishi)
    winner!: Rikishi;

    @Field()
    winningMethod!: Kimarite;

    @Field(type => Int)
    duration!: number;
}