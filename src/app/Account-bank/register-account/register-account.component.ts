import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interface/employee';
import { EmployeeService } from '../../Service/employee.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../../Service/user-auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit{
  employee: Employee;
  constructor(private employeeService: EmployeeService,
    private router: Router,
    private userAuthService: UserAuthService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  signUp(signUpForm: any){
    this.employeeService.signup(signUpForm.value).subscribe(
      (response: any)=>{
        console.log(response);
        console.log(response.role);
        this.userAuthService.setRoles(response.role);
        this.router.navigate(['/login']);
        const role = response.role;
        alert("Register SuccessFully")
      },
      (error) => {
        alert("Register SuccessFully");
        this.router.navigate(['/login']);
      }
    );
  }
}
