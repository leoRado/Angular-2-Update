import { Component } from '@angular/core';
import { EmployeeService } from './26.employee.service';
import { EmployeeDetails } from './26.employee.details';

@Component({
  selector: 'my-app',
  template: `
            <h2>Employee app</h2>
            <br>
            <employee-details></employee-details>
            <br>
            <employee-list></employee-list>
  `,
  providers: [EmployeeService]
})
export class AppComponent { }
