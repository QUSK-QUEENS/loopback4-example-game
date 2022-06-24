import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Armor, ArmorRelations } from '../models';
export declare class ArmorRepository extends DefaultCrudRepository<Armor, typeof Armor.prototype.id, ArmorRelations> {
    constructor(dataSource: MongoDataSource);
}
