import {Entity, model, property} from '@loopback/repository';

@model()
export class Equipos extends Entity {
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
  colorLocal: string;

  @property({
    type: 'string',
    required: true,
  })
  colorVisitante: string;

  @property({
    type: 'string',
    default: '#FFFFFF',
  })
  colorAlternativo?: string;


  constructor(data?: Partial<Equipos>) {
    super(data);
  }
}

export interface EquiposRelations {
  // describe navigational properties here
}

export type EquiposWithRelations = Equipos & EquiposRelations;
