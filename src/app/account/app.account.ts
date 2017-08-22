import {Component, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Account} from '../model.component';
import {LoggingService} from "../logging.service"
import {AccountService} from "./account.service";
@Component({
  selector: ' app-account',
  templateUrl: './app.account.html',
  styleUrls: ['./app.account.css'],
  providers: [LoggingService]
})
export class AccountComponent {
    @ViewChild('accountName')  accountNameRef: ElementRef;
    @ViewChild('accountStatus') accountStatusRef: ElementRef;

    constructor(private logginServiece: LoggingService,
      private accountService:AccountService){}
    onCreateAccount() {
      const name = this.accountNameRef.nativeElement.value;
      const status = this.accountStatusRef.nativeElement.value;
      const newAccount = new Account(name, status);
      this.accountService.accounts.push(newAccount)
       this.logginServiece.logStatusChange(status)
         // console.log( `server status changed , new status is${status}` )

    }

}
