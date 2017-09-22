import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SubComponent } from './16.sub.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SubComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }
