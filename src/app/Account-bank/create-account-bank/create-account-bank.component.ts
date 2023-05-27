import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';
import { AccountBankService } from '../account-bank.service';
import { AccountBank } from 'src/app/interface/account-bank';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-account-bank',
  templateUrl: './create-account-bank.component.html',
  styleUrls: ['./create-account-bank.component.css']
})
export class CreateAccountBankComponent {

  id: any;
  accountBank: AccountBank;

  constructor(private accountBankService: AccountBankService,
    private router: Router){}


}
