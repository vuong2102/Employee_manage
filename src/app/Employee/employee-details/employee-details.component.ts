import { Component } from '@angular/core';
import { Employee } from '../../interface/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../Service/employee.service';
import { AccountBankService } from 'src/app/Account-bank/account-bank.service';
import { AccountBank } from 'src/app/interface/account-bank';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  id: any;
  employee: Employee = {} as Employee;
  accountBank: AccountBank = {} as AccountBank;

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private accountBankService: AccountBankService,
    private router: Router){}

    ngOnInit(): void{
      this.id = this.route.snapshot.params['id'];
      this.employeeService.getEmployeeById(this.id).subscribe(data =>{
        this.employee = data;
        console.log(data);
      });
    }
    updateAccountBank(id: number){
      this.router.navigate(['update-account-bank', id]);
      alert("Update SuccessFully");
    }
    createAccountBank(){
      this.router.navigate(['create-account-bank']);
    }
}
