import { Routes, RouterModule } from "@angular/router";
import { EmployeeComponent } from "./employee/employee.component";
import { GreetComponent } from "./greet/greet.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from '@angular/core';

const routing : Routes = [
    { path: '', component: HomeComponent},
    { path: 'greet', component: GreetComponent },
    { path: 'employees', component: EmployeeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routing)],
    exports: [RouterModule]
})

export class appRoutes{}