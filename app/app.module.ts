import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { ReactiveFormsModule }      from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { RouterModule }             from '@angular/router';

import { AppRoutingModule }         from './31.app-routing.module';
import { AppComponent }             from './31.app.component';
import { EmployeeDetails }          from './26.employee.details';
import { EmployeeList }             from './26.employee.list';

import { routingComponents }        from './31.app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, EmployeeDetails, EmployeeList, routingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }
