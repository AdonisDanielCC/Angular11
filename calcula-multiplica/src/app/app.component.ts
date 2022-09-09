import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'calcula-multiplica';
  numero1: number =0
  numero2: number=0
  resultado: number=0

  multiplica():void{
 this.resultado = this.numero1 * this.numero2

  }
}
