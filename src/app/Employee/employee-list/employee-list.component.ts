import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interface/employee';
import { EmployeeService } from '../../Service/employee.service';
import { Router } from '@angular/router';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Page } from '../../interface/page';
import { ApiResponse } from '../../interface/api-response';
import { UserAuthService } from '../../Service/user-auth.service';
import { AccountBankService } from 'src/app/Account-bank/account-bank.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,
    private accountBank: AccountBankService,
    private router: Router,
    private userAuthService: UserAuthService){}

  employeesState$: Observable<{ appState: string, appData?: ApiResponse<Page>, error?: HttpErrorResponse }>;
  responseSubject = new BehaviorSubject<ApiResponse<Page>>(null);
  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();

  ngOnInit(): void {
    this.employeesState$ = this.employeeService.employees$().pipe(
      map((response: ApiResponse<Page>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number);
        console.log(response);
        return ({ appState: 'APP_LOADED', appData: response });
      }),
      startWith({ appState: 'APP_LOADING' }),
      catchError((error: HttpErrorResponse) =>{
        return of({ appState: 'APP_ERROR', error })}
        )
    )
  }

  gotToPage(name?: string, pageNumber: number = 0): void {
    this.employeesState$ = this.employeeService.employees$(name, pageNumber).pipe(
      map((response: ApiResponse<Page>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(pageNumber);
        console.log(response);
        return ({ appState: 'APP_LOADED', appData: response });
      }),
      startWith({ appState: 'APP_LOADED', appData: this.responseSubject.value }),
      catchError((error: HttpErrorResponse) =>{
        return of({ appState: 'APP_ERROR', error })}
        )
    )
  }

  goToNextOrPreviousPage(direction?: string, name?: string): void {
    this.gotToPage(name, direction === 'forward' ? this.currentPageSubject.value + 1 : this.currentPageSubject.value - 1);
  }

  // private getEmployees(){
  //   this.employeeService.getEmployeesList().subscribe((data) => {
  //     this.employees = data;
  //   });
  // }

  updateEmployee(id: number){
    if(this.userAuthService.getRoles() === 'admin'){
      this.router.navigate(['update-employee', id]);
    }
    else alert("you need to contact the admin to do that!");
  }

  detailEmployee(id: number){
    if(this.userAuthService.getRoles() === 'admin' || this.userAuthService.getRoles() === 'user'){
      this.router.navigate(['employees', id]);
    }
    else alert("You need to login");
  }
  createAccountBank(id: number){

  }
  deleteEmployee(id: number){
    if(this.userAuthService.getRoles() === 'admin'){
      this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data)
      this.router.navigate(['employees']);
      alert("Delete SuccessFully");
      // this.getEmployees();
      })
    }
    else alert("you need to contact the admin to do that!");
  }
  addFunction(){
    if(this.userAuthService.getRoles() === 'admin'){
      this.router.navigate(['/create-employee']);
    }
    else{
      alert("you need to contact the admin to do that!");
    }
  }
}
