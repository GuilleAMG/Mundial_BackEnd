import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConexionMongoDataSource} from '../datasources';
import {Estadios, EstadiosRelations} from '../models';

export class EstadiosRepository extends DefaultCrudRepository<
  Estadios,
  typeof Estadios.prototype.id,
  EstadiosRelations
> {
  constructor(
    @inject('datasources.ConexionMongo') dataSource: ConexionMongoDataSource,
  ) {
    super(Estadios, dataSource);
  }
}
