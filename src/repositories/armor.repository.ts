import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Armor, ArmorRelations} from '../models';

export class ArmorRepository extends DefaultCrudRepository<
  Armor,
  typeof Armor.prototype.id,
  ArmorRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Armor, dataSource);
  }
}
