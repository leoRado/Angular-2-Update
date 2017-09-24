import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { AppComponent }         from './22.mdf.validate';
import { SubComponent }         from './16.sub.component';
import { FormsModule }          from '@angular/forms';
import { ReactiveFormsModule }  from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, SubComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }
