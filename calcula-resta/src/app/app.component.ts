import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'calcula-resta';

  numeroA : number = 0;
  numeroB : number = 0;
  resultado: number = 0;

  resta():void{
    this.resultado= this.numeroA - this.numeroB;
  }

}
