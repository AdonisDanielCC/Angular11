import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {

  nombre: string ='Daniel';
  apellido: string = 'Contreras';
  edad: number = 37;
  //private edad: number = 37

  /*getEdad():number{
    return this.edad;
  }*/

  

}
