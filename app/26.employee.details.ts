
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './26.employee.service';

@Component({
    selector: 'employee-details',
    template: `
                <h3>Employee list</h3>
                <h4>{{errorMsg}}</h4>
                <ul *ngFor="let employee of employees">
                    <li>{{employee.id}}. {{employee.name}} - {{employee.gender}}</li>
                </ul>
    `
})
export class EmployeeDetails implements OnInit {
    private employees = [];
    private errorMsg: string;

    constructor (private _employeeService: EmployeeService) { }

    ngOnInit() {
        // this.employees = this._employeeService.getEmployees();
        this._employeeService.getEmployeesHTTP()
            .subscribe(resEmployeeData => this.employees = resEmployeeData,
                        resEmployeeDataError => this.errorMsg = resEmployeeDataError);
    }
}