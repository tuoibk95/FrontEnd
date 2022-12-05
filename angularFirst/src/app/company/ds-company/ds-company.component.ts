import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-ds-company',
  templateUrl: './ds-company.component.html',
  styleUrls: ['./ds-company.component.css']
})
export class DsCompanyComponent implements OnInit {
  listCompany:any = [];
  company:any;
  action : boolean = false;
  tieude:any;
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.ReloadListCompany();
  }
  ReloadListCompany() {
    this.employeeService.GetListCompany().subscribe(data => {
      this.listCompany = data
    })
  }

  AddCompany() {
    this.company={
      id:0,
      companyName: ""
    }
    this.action =true;
    this.tieude='Add Company'
  }

  GetDetailCompany(company: any){
    this.company = company;
    this.action = true;
    this.tieude = 'update Company';
  }

  DeleteCompany(company:any) {
    if (confirm("Delete????")){
      this.employeeService.DeleteCompany(company.id).subscribe(data => {
        alert(data.toString());
        this.ReloadListCompany();
      }) 
    }

  }

  ClosePopup() {
    this.action =false;
    this.ReloadListCompany();
  }
}
