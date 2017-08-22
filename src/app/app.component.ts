import {Component, OnInit} from '@angular/core';
import {Account} from './model.component';
import {AccountService} from "./account/account.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit{

  accounts: Account[] = []
   // onAccountAdded(newac: Account ) {
   //      this.accounts.push(newac);
   //      }
   //     onStatuschange( updateinfo: {id: number, newStatus: string}) {
   //
   //     this.accounts[updateinfo.id].status = updateinfo.newStatus;
   //
   //     }
      constructor(private accountService: AccountService) {

      }
      ngOnInit(){
         this.accounts= this.accountService.accounts
  }


 }

