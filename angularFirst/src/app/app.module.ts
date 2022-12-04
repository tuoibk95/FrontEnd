import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    EmployeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    appRoutes
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
