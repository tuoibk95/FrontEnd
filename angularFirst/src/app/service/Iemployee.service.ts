import { Observable } from "rxjs";

export interface IEmployeeService {
    GetList() : Observable<any[]>;
}