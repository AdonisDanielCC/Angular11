import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyComponentMuestraComponent } from './my-component-muestra/my-component-muestra.component';

@NgModule({
  declarations: [	
    AppComponent,
      MyComponentMuestraComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
