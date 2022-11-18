import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConexionMongoDataSource} from '../datasources';
import {Equipos, EquiposRelations} from '../models';

export class EquiposRepository extends DefaultCrudRepository<
  Equipos,
  typeof Equipos.prototype.id,
  EquiposRelations
> {
  constructor(
    @inject('datasources.ConexionMongo') dataSource: ConexionMongoDataSource,
  ) {
    super(Equipos, dataSource);
  }
}
