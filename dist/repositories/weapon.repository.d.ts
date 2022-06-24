import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Weapon, WeaponRelations } from '../models';
export declare class WeaponRepository extends DefaultCrudRepository<Weapon, typeof Weapon.prototype.id, WeaponRelations> {
    constructor(dataSource: MongoDataSource);
}
