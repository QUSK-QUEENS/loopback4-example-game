import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Character, CharacterRelations, Armor, Weapon, Skill } from '../models';
import { HasOneRepositoryFactory } from "@loopback/repository";
export declare class CharacterRepository extends DefaultCrudRepository<Character, typeof Character.prototype.id, CharacterRelations> {
    armor: HasOneRepositoryFactory<Armor, typeof Character.prototype.id>;
    weapon: HasOneRepositoryFactory<Weapon, typeof Character.prototype.id>;
    skill: HasOneRepositoryFactory<Skill, typeof Character.prototype.id>;
    constructor(dataSource: MongoDataSource);
}
