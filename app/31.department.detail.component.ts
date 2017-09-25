
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
            <h3>Department with id = {{departmentId}} </h3>
            `
})
export class DepartmentDetailComponent implements OnInit {

    private departmentId: number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.departmentId = this.route.snapshot.params['id'];
    }
 }
