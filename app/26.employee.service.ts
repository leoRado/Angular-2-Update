import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    getEmployees() {
        return [
            {"id": 1, "name": "Leonhard", "gender": "Male"},
            {"id": 2, "name": "Milena", "gender": "Female"},
            {"id": 3, "name": "Lazar", "gender": "Male"},
            {"id": 4, "name": "Aca", "gender": "Male"},
            {"id": 5, "name": "Jovana", "gender": "Female"}
        ];
    };
}