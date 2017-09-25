import { Component } from '@angular/core';
import { EmployeeService } from './26.employee.service';
import { EmployeeDetails } from './26.employee.details';

@Component({
  selector: 'my-app',
  template: `
            <h2>Employee app</h2>
            <nav>
                <a routerLink="/departments" routerLinkActive="active">Departments</a>
                <a routerLink="/employees" routerLinkActive="active">Employees</a>
            </nav>
            <router-outlet></router-outlet>
  `,
  providers: [EmployeeService]
})
export class AppComponent { }
