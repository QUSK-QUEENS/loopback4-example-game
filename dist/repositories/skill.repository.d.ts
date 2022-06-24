import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Skill, SkillRelations } from '../models';
export declare class SkillRepository extends DefaultCrudRepository<Skill, typeof Skill.prototype.id, SkillRelations> {
    constructor(dataSource: MongoDataSource);
}
