import { Component, OnInit } from '@angular/core';
import { Persona} from './persona.model';
import {LoggingService} from './LoggingService.service';
import {PersonasService} from './personas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  titulo= 'Listado de Personas';



}


