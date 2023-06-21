import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from '@angular/core';
import { CompanyComponent } from "./company/company.component";

const routing : Routes = [
    { path: '', component: HomeComponent},
    { path: 'company', component : CompanyComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routing)],
    exports: [RouterModule]
})

export class appRoutes{}