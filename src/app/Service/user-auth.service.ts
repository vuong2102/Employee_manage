import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(){}
  // state.appData.data.page.content
  public setRoles(role: string) {
    localStorage.setItem('role', role);
  }
  public getRoles(): string {
    return localStorage.getItem('role');
  }
  public clear(){
    localStorage.clear();
  }
  public isLoggedIn() {
    return this.getRoles();
  }
}
