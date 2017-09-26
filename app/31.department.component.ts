
import { Component, OnInit }            from '@angular/core';
import { Router, ActivatedRoute, Params }               from '@angular/router';

@Component({
    selector: 'departments',
    template: `
            <h3>Department List </h3>
            <ul class="items">
                <li *ngFor="let department of departments" (click)="departmentClicked(department)">
                    <span [class.badge]="isDepartmentSelected(department)">{{department.id}}</span> {{department.name}}
                </li>
            </ul>
            `,
            styles: [`
                myCls { color: red; background-color: #0f0;}
            `]
})
export class DepartmentListComponent implements OnInit { 
    private departmentId: number;

    departments = [
        { "id": 1, "name": "Angular" },
        { "id": 2, "name": "React" },
        { "id": 3, "name": "Spring" },
        { "id": 4, "name": "Play" },
        { "id": 5, "name": "Laravel" },
        { "id": 6, "name": "NodeJS" }
    ];

    constructor(private router: Router, private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.departmentId = parseInt(params['id']);
        })
    }

    departmentClicked(department) {
        this.router.navigate(['/departments', department.id]);
    }

    isDepartmentSelected(department) {
        return department.id === this.departmentId;
    }
}