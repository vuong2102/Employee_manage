import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './Employee/delete-employee/delete-employee.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { AccountBackComponent } from './Account-bank/account-back/account-back.component';
import { LoginComponent } from './login/login.component';
import { UpdateAccountBankComponent } from './Account-bank/update-account-bank/update-account-bank.component';
import { RegisterAccountComponent } from './Account-bank/register-account/register-account.component';
import { CreateAccountBankComponent } from './Account-bank/create-account-bank/create-account-bank.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeeDetailsComponent,
    AccountBackComponent,
    LoginComponent,
    UpdateAccountBankComponent,
    RegisterAccountComponent,
    CreateAccountBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
