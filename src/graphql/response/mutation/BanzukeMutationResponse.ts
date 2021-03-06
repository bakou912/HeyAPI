import { Field, ObjectType } from "type-graphql";
import { CreationResponse } from "./CreationResponse";
import { Banzuke } from "../../../model/entity/Banzuke";

@ObjectType()
export class BanzukeMutationResponse extends CreationResponse {
    @Field(() => Banzuke, { nullable: true })
    data?: Banzuke
}

@ObjectType()
export class BanzukesMutationResponse extends CreationResponse {
    @Field(() => [Banzuke], { nullable: true })
    data?: Banzuke[]
}
