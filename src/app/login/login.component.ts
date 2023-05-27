import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserAuthService } from '../Service/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private employeeService: EmployeeService,
    private userAuthService: UserAuthService,
    private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  login(loginForm: NgForm){
    this.employeeService.login(loginForm.value).subscribe(
      (response: any)=>{
        console.log(response);
        console.log(response.role);
        this.userAuthService.setRoles(response.role);
        this.router.navigate(['/employees']);
        const role = response.role;
      },
      (Error) => {
        alert("Tài khoản hoặc mật khẩu sai");
      }
    );
  }
}
