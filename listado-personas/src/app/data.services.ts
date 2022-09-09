import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  //metodo Guardar Personas
  guardarPersonas(personas: Persona[]) {
    this.httpClient.post(
      'https://listado-personas-5f38f-default-rtdb.firebaseio.com/.json',personas)
      .subscribe(
        response =>console.log("resultado guardar Personas " + response),
        error=> console.log("Error al guardar Perosnas: " + error)
      );
    }
}
