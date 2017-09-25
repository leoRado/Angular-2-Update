import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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
            .map((response: Response) => response.json())
            .catch(this._errorHandler);
    };

    _errorHandler(error: Response) {
        console.error("ERROR");
        console.error(error);
        return Observable.throw(error || "Server error");
    }
}