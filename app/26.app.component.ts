import { Component } from '@angular/core';
import { EmployeeService } from './26.employee.service';

@Component({
  selector: 'my-app',
  template: `<h2>Employee app</h2>
                <employee-list></employee-list>
                </br>
                <employee-details></employee-details>
  `,
  providers: [ EmployeeService ]
})
export class AppComponent { }
