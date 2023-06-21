import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class EmployeeService {
    private apiUrl = 'https://localhost:44356/api';

    constructor(private httpClient: HttpClient) { }

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
        return this.httpClient.delete<any>(`${this.apiUrl}/company/${data}`);
    }
}