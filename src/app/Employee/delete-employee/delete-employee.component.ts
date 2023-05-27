import { Component } from '@angular/core';
import { Employee } from '../../interface/employee';
import { EmployeeService } from '../../Service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
  employee: Employee = {} as Employee;

  constructor(private employeeService: EmployeeService,
    private router: Router){}

  ngOnIt(){
    this.goToEmpolyeeList();
  }

  // onSubmit(){
  //   console.log(this.employee);
  //   this.employeeService.deleteEmployee(this.id, this.employee).subscribe(data => {
  //     this.goToEmpolyeeList();
  //   }, error => console.log(error));
  // }
  goToEmpolyeeList() {
    this.router.navigate(['/employees']);
  }
}
