// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get, post, requestBody, response, param} from '@loopback/rest'
import {repository} from '@loopback/repository'
import {request} from 'http';
import { EquiposRepository } from '../repositories';

export class SaludarController {
  constructor(
    @repository(EquiposRepository) public datos:EquiposRepository
  ) {}

  @get('/saludar')
  @response(200,{msj:'Hola, tu saludo funciona!'})
  fnsaludar():any{
    let datos:number = 5+4;
    // return {respuesta: `Hola Mundo, la suma es: ${datos}`}
    return this.datos.find();
  }
  
  @get('Equipos-Personalizados')
  // Funcion Asincrona
  async getDatos(): Promise<any>{
    return await this.datos.find();
  }

  @post('/golosinas/{apellido}')
  @response(201)
  fnCrearGolosinas(
    @param.query.string('nombre') nombre:string, // ?
    @param.path.string('apellido') apellido:string, // /
    @requestBody() contacto:any // JSON
    ):any{
         return `El usuario ingreso su nombre: ${nombre}, y su apellido: ${apellido}, gracias!` 
  }
}
