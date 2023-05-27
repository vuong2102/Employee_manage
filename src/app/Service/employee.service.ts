import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interface/employee';
import { CreateEmployeeComponent } from '../Employee/create-employee/create-employee.component';
import { ApiResponse } from '../interface/api-response';
import { Page } from '../interface/page';
import { UserAuthService } from './user-auth.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient,
    private userAuthService: UserAuthService) { }

  employees$ = (name: string = '', pageNo: number = 0, pageSize: number = 10): Observable<ApiResponse<Page>> =>
  this.httpClient.get<ApiResponse<Page>>(`${this.baseURL}/employees?name=${name}&pageNo=${pageNo}&pageSize=${pageSize}`);

  getEmployeesList(name: string = '', pageNo: number = 0, pageSize: number = 10): Observable<ApiResponse<Page>>{
    return this.httpClient.get<ApiResponse<Page>>(`${this.baseURL}/employees?name=${name}&pageNo=${pageNo}&pageSize=${pageSize}`);
  }
  // getEmployeesList(): Observable<Employee[]>{
  //   return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  // }
  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/create-employee`, employee);
  }
  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/employees/${id}`);
  }
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update-employee/${id}`, employee);
  }
  detailEmployee(id: number){
    return this.httpClient.get(`${this.baseURL}/employees/${id}`);
  }
  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete-employee/${id}`);
  }
  login(loginData: any){
    return this.httpClient.post(`${this.baseURL}/sign-in`, loginData);
  }
  signup(signup: any){
    return this.httpClient.post(`${this.baseURL}/sign-up`, signup);
  }
  roleMatch(allowedRoles: any): boolean{
    let isMatch = false;
    const userRole: any = this.userAuthService.getRoles();
    if(userRole === allowedRoles){
      isMatch = true;
      return isMatch;
    }
    else{
      return isMatch;
    }
  }
}
