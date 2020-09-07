import { Service } from "typedi";
import { GraphQLResolveInfo } from "graphql";
import { Basho } from "../../entity/object/Basho";
import { RikishiResolver } from "./RikishiResolver";
import { CreateBashoInput } from "../input/basho/CreateBashoInput";
import { UpdateBashoInput } from "../input/basho/UpdateBashoInput";
import { Arg, Info, Mutation, Query, Resolver } from "type-graphql";
import { BashoRepository } from "../../db/repository/BashoRepository";
import { BooleanMutationResponse } from "../response/mutation/BooleanMutationResponse";
import { BashoCreationResponse } from "../response/mutation/BashoCreationResponse";

@Service()
@Resolver(() => Basho)
export class BashoResolver {

    constructor(
        private rikishiResolver: RikishiResolver,
        private bashoRepository: BashoRepository
    ) {}

    @Query(() => Basho)
    public async basho(@Arg("id") id: number, @Info() info: GraphQLResolveInfo): Promise<Basho> {
        return await this.bashoRepository.findDetailled(id, info.fieldNodes);
    }

    @Mutation(() => BashoCreationResponse)
    public async createBasho(@Arg("basho") basho: CreateBashoInput): Promise<BashoCreationResponse> {
        const response: BashoCreationResponse = new BashoCreationResponse();
        try {
            response.data = await this.bashoRepository.create(basho);
        } catch (e) {
            response.error = (e as Error).message;
        }
        return response;
    }

    @Mutation(() => BooleanMutationResponse)
    public async updateBasho(@Arg("basho") basho: UpdateBashoInput): Promise<BooleanMutationResponse> {
        const response: BooleanMutationResponse = new BooleanMutationResponse();
        try {
            response.success = await this.bashoRepository.update(basho);
        } catch (e) {
            response.error = (e as Error).message;
            response.success = false;
        }
        return response;
    }
}
