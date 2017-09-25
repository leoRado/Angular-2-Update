
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './26.employee.service';

@Component({
    selector: 'employee-list',
    template: `
                <h3>Employee list</h3>
                <ul *ngFor="let employee of employees">
                    <li>{{employee.name}}</li>
                </ul>
    `
})
export class EmployeeList implements OnInit {
    private employees = [];

    constructor (private _employeeService: EmployeeService) { }

    ngOnInit() {
        // this.employees = this._employeeService.getEmployees();
        this._employeeService.getEmployeesHTTP()
            .subscribe(resEmployeeData => this.employees = resEmployeeData);
    }
}