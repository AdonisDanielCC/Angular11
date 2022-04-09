
import {Component} from "@angular/core"


@Component({
  selector: 'app-personas',
  templateUrl:'./personas.component.html',
  styleUrls:['./personas.component.css'] //esta forma es para agregar una hoja de estilos

})
export class PersonasComponent{
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  titulo=''

  agregarPersona(){
    this.mensaje = 'Persona agregada';
  }
  modificarTitulo(event:Event){
    console.log('Entrando a modificar titulo')
      this.titulo= (<HTMLInputElement>event.target).value;
  }

}
