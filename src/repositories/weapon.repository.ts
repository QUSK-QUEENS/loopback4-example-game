import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Weapon, WeaponRelations} from '../models';

export class WeaponRepository extends DefaultCrudRepository<
  Weapon,
  typeof Weapon.prototype.id,
  WeaponRelations
> {

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Weapon, dataSource);
  }
}
