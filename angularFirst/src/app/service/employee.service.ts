import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { filter, map } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
    private apiUrl = 'https://638c4f18eafd555746a3db74.mockapi.io/api/employees';

    constructor(private httpClient: HttpClient){}

    GetList() : Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiUrl)
    }
}