import { Component } from '@angular/core';
import { EmployeeService } from './Service/employee.service';
import { Router } from '@angular/router';
import { UserAuthService } from './Service/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee_management';

  constructor(
    public employeeService: EmployeeService,
    private router: Router,
    private userAuthService: UserAuthService){}

  isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }
  logout(){
    this.userAuthService.clear();
    alert("Bạn đã đăng xuất thành công");
    this.router.navigate(['employees']);
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
