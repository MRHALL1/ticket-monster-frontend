import {Component, OnInit} from '@angular/core';
import {Account} from './account';
import {AccountService} from './account.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  accounts: Account[];

  ngOnInit() {
    this.getAllAccounts();
  }


  constructor(private accountService: AccountService) {

  }

  getAllAccounts() {
    this.accountService.getAllAccounts().subscribe(
      data => {
        console.log(data);
        this.accounts = data;
      },
      error => {
        console.log(error.json());
      }
    );
  }
}
