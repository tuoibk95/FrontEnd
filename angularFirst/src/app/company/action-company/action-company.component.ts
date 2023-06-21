import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-action-company',
  templateUrl: './action-company.component.html',
  styleUrls: ['./action-company.component.css']
})
export class ActionCompanyComponent implements OnInit {

  @Input() id : any;
  companyName : any = [];
  @Input() company:any;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.company.id;
    this.companyName = this.company.companyName;
  }

  AddCompany() {
    let data = {
      // id : this.id,
      companyName : this.companyName
    };
    if(data.companyName !== "") {
      this.employeeService.AddCompany(data).subscribe(response => {
        alert(response.toString());
        localStorage.setItem('company', 'Lê Văn Tươi');
      });
    }
  }

  UpdateCompany() {
    let companyLocalStorage = localStorage.getItem('company');
    let data = {
      id : this.id,
      companyName : this.companyName
    };
    if(data.companyName !== "") {
      this.employeeService.UpdateCompany(data).subscribe(response => {
        alert(response.toString());
      });
    }
  }
}
