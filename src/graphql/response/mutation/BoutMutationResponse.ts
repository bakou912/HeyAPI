import { Field, ObjectType } from "type-graphql";
import { Bout } from "../../../model/entity/Bout";
import { CreationResponse } from "./CreationResponse";

@ObjectType()
export class BoutMutationResponse extends CreationResponse {
    @Field(() => Bout, { nullable: true })
    data?: Bout
}
