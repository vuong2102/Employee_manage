import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interface/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../Service/employee.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  id: any;
  employee: Employee = {} as Employee;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(this.employee);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToEmpolyeeList();
    }, error => console.log(error));
    alert("Update SuccessFully");
    this.router.navigate(['/employees']);
  }

  goToEmpolyeeList(){
    this.router.navigate(['/employees']);
  }

}
