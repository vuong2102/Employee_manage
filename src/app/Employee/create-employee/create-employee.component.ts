
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interface/employee';
import { EmployeeService } from '../../Service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{

  //initialize an object based on an interface you can initialize it empty with following statement
  employee: Employee = {} as Employee;
  // = new Employee(1,'','','');
  constructor(private employeeService: EmployeeService,
    private router: Router){}

  ngOnInit(): void {

  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmpolyeeList();
    },
    error => console.log(error));
  }

  //Điều hướng đến trang employees khi submit
  goToEmpolyeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    alert("Create SuccessFully");
    this.saveEmployee();
  }
}
