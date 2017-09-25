import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { AppComponent }         from './26.app.component';
import { EmployeeDetails }         from './26.employee.details';
import { EmployeeList }         from './26.employee.list';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule ],
  declarations: [ AppComponent, EmployeeDetails, EmployeeList ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }
