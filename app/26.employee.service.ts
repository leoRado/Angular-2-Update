import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

    private url: string = "apidata/employeedata.json";

    constructor(private _http: Http) {}

    getEmployees() {
        return [
            {"id": 1, "name": "Leonhard", "gender": "Male"},
            {"id": 2, "name": "Milena", "gender": "Female"},
            {"id": 3, "name": "Lazar", "gender": "Male"},
            {"id": 4, "name": "Aca", "gender": "Male"},
            {"id": 5, "name": "Jovana", "gender": "Female"}
        ];
    };

    getEmployeesHTTP() {
        return this._http.get(this.url)
            .map((response: Response) => response.json());
    };
}