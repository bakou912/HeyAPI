import { Service } from "typedi";
import { Repository } from "./Repository";
import { PartialModelObject } from "objection";
import { Rank } from "../../entity/object/rikishi/Rank";
import { GenericCRUDRepositoryUtil } from "../../util/GenericCRUDRepositoryUtil";

@Service()
export class RankRepository implements Repository<Rank> {

    constructor(private repositoryUtil: GenericCRUDRepositoryUtil) {}

    public async create(item: PartialModelObject<Rank>): Promise<Rank> {
        return await this.repositoryUtil.create(item, Rank.query());
    }

    public async find(id: number): Promise<Rank> {
        return await this.repositoryUtil.find(id, Rank.query());
    }

    public async update(item: Rank): Promise<Rank> {
        return this.repositoryUtil.update(item, Rank.query());
    }

    public async delete(id: number): Promise<boolean> {
        return this.repositoryUtil.delete(id, Rank.query());
    }

    public async createMany(rikishiId: number, ranks: PartialModelObject<Rank>[]): Promise<Rank[]> {
        ranks = ranks.map(r => {
            r.rikishiId = rikishiId;
            return r;
        })
        return Rank.query().insert(ranks);
    }

    public async findByRikishiId(id: number): Promise<Rank[]> {
        return Rank.query()
            .where({ "rikishiId": id });
    }
}
