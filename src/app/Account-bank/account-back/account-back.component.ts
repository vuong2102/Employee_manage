import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountBankService } from '../account-bank.service';
import { AccountBank } from 'src/app/interface/account-bank';

@Component({
  selector: 'app-account-back',
  templateUrl: './account-back.component.html',
  styleUrls: ['./account-back.component.css']
})
export class AccountBackComponent implements OnInit{
  accountBank: AccountBank[] = [];

  constructor(private accountBankservice: AccountBankService,
    private router: Router){}

  ngOnInit(): void {
    this.getAccountBanks;
  }

    private getAccountBanks(){
      this.accountBankservice.getAccountBanksList().subscribe((data) => {
        this.accountBank = data;
      });
    }

    updateAccountBank(id: number){
      this.router.navigate(['update-account-bank', id]);
    }

    detailAccountBank(id: number){
      this.router.navigate(['detail-account-bank', id]);
    }

    deleteAccountBank(id: number){
      this.accountBankservice.deleteAccountBank(id).subscribe(data => {
        console.log(data)
        // this.getaccountBanks();
      })
    }
}
