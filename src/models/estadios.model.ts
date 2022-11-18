import {Entity, model, property} from '@loopback/repository';

@model()
export class Estadios extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  ubicacion: string;


  constructor(data?: Partial<Estadios>) {
    super(data);
  }
}

export interface EstadiosRelations {
  // describe navigational properties here
}

export type EstadiosWithRelations = Estadios & EstadiosRelations;
