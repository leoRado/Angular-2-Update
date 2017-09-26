
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    template: `
            <h3>Department with id = {{departmentId}} </h3>
            <a (click)="goPrevious()">Previous</a>
            --
            <a (click)="goNext()">Next</a>
            <br>
            <a (click)="goBack()">Back</a>
            `
})
export class DepartmentDetailComponent implements OnInit {

    private departmentId: number;

    constructor(private route: ActivatedRoute, private _router: Router) { }

    // ngOnInit() {
    //     this.departmentId = parseInt(this.route.snapshot.params['id']);
    // }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.departmentId = parseInt(params['id']);
        });
    }

    goPrevious() {
        let prevoiusId = this.departmentId - 1;
        this._router.navigate(['/departments', prevoiusId]);
    }

    goNext () {
        let nextId = this.departmentId + 1;
        this._router.navigate(['/departments', nextId]);
    }

    goBack() {
        let selectedId = this.departmentId ? this.departmentId : null;
        this._router.navigate(['/departments', { id: selectedId }]);
    }
 }
