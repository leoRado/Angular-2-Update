import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { EmployeeComponent }            from './31.employee.component';
import { DepartmentListComponent }      from './31.department.component';
import { DepartmentDetailComponent }    from './31.department.detail.component';
import { HomeComponent }                from './31.home.component';
import { PageNotFoundComponent }        from './31.page.not.found.component';

const routes: Routes = [
    { path: '',                     redirectTo: '/departments', pathMatch: 'full' }, // pathMatch: [ full | prefix ]
    { path: 'departments',          component: DepartmentListComponent },
    { path: 'employees',            component: EmployeeComponent },
    { path: 'departments/:id',      component: DepartmentDetailComponent },
    { path: '**',                   component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

export const routingComponents = [ 
    DepartmentListComponent, 
    EmployeeComponent, 
    DepartmentDetailComponent, 
    HomeComponent,
    PageNotFoundComponent 
];