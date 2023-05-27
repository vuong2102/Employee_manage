import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { AccountBackComponent } from './Account-bank/account-back/account-back.component';
import { LoginComponent } from './login/login.component';
import { RegisterAccountComponent } from './Account-bank/register-account/register-account.component';
import { CreateAccountBankComponent } from './Account-bank/create-account-bank/create-account-bank.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employees/:id', component: EmployeeDetailsComponent},
  {path: 'account-banks', component: AccountBackComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: RegisterAccountComponent},

  //Account-Bank
  {path: 'update-account-bank/:id', component: LoginComponent},
  {path: 'create-account-bank', component: CreateAccountBankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
