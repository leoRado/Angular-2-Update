import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SubComponent } from './16.sub.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SubComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }
