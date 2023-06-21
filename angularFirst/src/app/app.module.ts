import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routes';
import { CompanyComponent } from './company/company.component';
import { DsCompanyComponent } from './company/ds-company/ds-company.component';
import { ActionCompanyComponent } from './company/action-company/action-company.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    DsCompanyComponent,
    ActionCompanyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutes
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
