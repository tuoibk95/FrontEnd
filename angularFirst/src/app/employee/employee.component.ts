import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees : any[] | undefined;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // this.employees = this.employeeService.GetList();
    this.employeeService.GetList().subscribe((reponse:any) => {
      this.employees = reponse;
    }, error => {
      console.log(error);
    });
  }

}
