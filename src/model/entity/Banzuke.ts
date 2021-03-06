import { Basho } from "./Basho";
import { Rikishi } from "./Rikishi";
import { BaseModel } from "./BaseModel";
import { JSONSchema, Model } from "objection";
import { Field, ObjectType, Int } from "type-graphql";
import { GraphQLString } from "graphql";
import { BoutResult } from "../valueobject/BoutResult";
import { Shikona } from "./Shikona";

@ObjectType({ description: "The Banzuke model" })
export class Banzuke extends BaseModel {

    static get tableName() {
        return "banzuke";
    }

    rikishiId!: number;
    shikonaId!: number;
    bashoId!: number;

    @Field(() => GraphQLString)
    heya!: string;

    @Field(() => GraphQLString)
    rank!: string;

    @Field(() => Basho)
    basho!: Basho;

    @Field(() => Rikishi)
    rikishi!: Rikishi;

    @Field(() => Shikona)
    shikona!: Shikona;

    @Field(() => BoutResult, { nullable: true })
    bashoResult?: BoutResult;

    @Field(() => Int, { nullable: true })
    weight?: number;

    @Field(() => Int, { nullable: true })
    height?: number;

    static get jsonSchema(): JSONSchema {
        return {
            type: "object",
            required: [
                "rikishiId",
                "bashoId",
                "shikonaId",
                "heya",
                "rank"
            ],
            properties: {
                id: { type: "integer" },
                rikishiId: { type: "integer" },
                bashoId: { type: "integer" },
                shikonaId: { type: "integer" },
                heya: { type: "string" },
                rank: { type: "string" },
                weight: { type: "integer" },
                height: { type: "integer" }
            }
        };
    }

    static get relationMappings() {
        return {
            rikishi: {
                relation: Model.HasOneRelation,
                modelClass: Rikishi,
                join: {
                    from: "banzuke.rikishiId",
                    to: "rikishis.id"
                }
            },
            basho: {
                relation: Model.HasOneRelation,
                modelClass: Basho,
                join: {
                    from: "banzuke.bashoId",
                    to: "bashos.id"
                }
            },
            shikona: {
                relation: Model.HasOneRelation,
                modelClass: Shikona,
                join: {
                    from: "banzuke.shikonaId",
                    to: "shikonas.id"
                }
            }
        };
    }
}
