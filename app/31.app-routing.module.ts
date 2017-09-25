import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { EmployeeComponent }            from './31.employee.component';
import { DepartmentListComponent }      from './31.department.component';
import { DepartmentDetailComponent }      from './31.department.detail.component';

const routes: Routes = [
    { path: 'departments', component: DepartmentListComponent },
    { path: 'employees', component: EmployeeComponent },
    { path: 'departments/:id', component: DepartmentDetailComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

export const routingComponents = [ DepartmentListComponent, EmployeeComponent, DepartmentDetailComponent ];