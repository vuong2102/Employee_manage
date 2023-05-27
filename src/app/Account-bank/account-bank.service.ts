import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountBank } from '../interface/account-bank';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountBankService {

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }


  getAccountBanksList(): Observable<AccountBank[]>{
    return this.httpClient.get<AccountBank[]>(`${this.baseURL}/account-banks`);
  }
  createAccountBank(accountBank: AccountBank, id: number): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/employees/${id}/create-account-bank`, accountBank);
  }
  updateAccountBank(id: number, accountBank: AccountBank): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}/update-account-bank`, accountBank);
  }
  detailAccountBank(id: number){
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
  deleteAccountBank(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}/delete-account-bank`);
  }
}
