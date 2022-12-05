import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { filter, map } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
    private apiUrl = 'https://localhost:7151/api';

    constructor(private httpClient: HttpClient) { }

    GetList(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiUrl+'/employee')
    }

    GetListCompany() :Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiUrl+'/company');
    }

    AddCompany(data : any) : Observable<any>{
        return this.httpClient.post<any>(this.apiUrl+'/company', data);
    }

    UpdateCompany(data : any) : Observable<any> {
        return this.httpClient.put<any>(this.apiUrl+'/company', data);
    }

    DeleteCompany(data :any) : Observable<any> {
        return this.httpClient.delete<any>(this.apiUrl+'/company', data);
    }

    DeleteEmployee() : Observable<any> {
        return this.httpClient.delete<any>(this.apiUrl+'/employee');
    }


    GetListEmployee() :Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiUrl+'/employee');
    }

    AddEmployee(data : any) : Observable<any>{
        return this.httpClient.post<any>(this.apiUrl+'/employee', data);
    }

    UpdateEmployee(data : any) : Observable<any> {
        return this.httpClient.put<any>(this.apiUrl+'/employee', data);
    }

    GetListCompanyName() : Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiUrl+'/employee/GetAllCompanyName')
    }
}