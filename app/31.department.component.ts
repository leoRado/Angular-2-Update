
import { Component }            from '@angular/core';
import { Router }               from '@angular/router';

@Component({
    selector: 'departments',
    template: `
            <h3>Department List </h3>
            <ul class="items">
                <li *ngFor="let department of departments" (click)="departmentClicked(department)">
                    <span class="badge">{{department.id}}</span> {{department.name}}
                </li>
            </ul>
            `
})
export class DepartmentListComponent { 
    departments = [
        { "id": 1, "name": "Angular" },
        { "id": 2, "name": "React" },
        { "id": 3, "name": "Spring" },
        { "id": 4, "name": "Play" },
        { "id": 5, "name": "Laravel" },
        { "id": 6, "name": "NodeJS" }
    ];

    constructor(private router: Router) { }

    departmentClicked(department) {
        this.router.navigate(['/departments', department.id]);
    }
}