import { Service } from "typedi";
import { Repository } from "./Repository";
import { PartialModelObject } from "objection";
import { GenericCRUDRepositoryUtil } from "../../util/GenericCRUDRepositoryUtil";
import { Banzuke } from "../../model/entity/Banzuke";

@Service()
export class BanzukeRepository implements Repository<Banzuke> {

    constructor(private repositoryUtil: GenericCRUDRepositoryUtil) {}

    public async create(item: PartialModelObject<Banzuke>): Promise<Banzuke> {
        return this.repositoryUtil.create(item, Banzuke.query());
    }

    public async find(id: number): Promise<Banzuke> {
        return this.repositoryUtil.find(id, Banzuke.query());
    }

    public async update(item: Banzuke): Promise<Banzuke> {
        return this.repositoryUtil.update(item, Banzuke.query());
    }

    public async delete(id: number): Promise<boolean> {
        return this.repositoryUtil.delete(id, Banzuke.query());
    }

    public async createMany(banzukes: PartialModelObject<Banzuke>[]): Promise<Banzuke[]> {
        return Banzuke.query().insert(banzukes);
    }

    public async findByRikishiId(id: number): Promise<Banzuke[]> {
        return Banzuke.query().where({ "rikishiId": id });
    }
}
