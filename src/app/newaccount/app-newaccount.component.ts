import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Account} from '../model.component';
import {LoggingService} from "../logging.service"
import {AccountService} from "../account/account.service";
@Component({
  selector: 'app-new-account',
  templateUrl: './app-newaccount.component.html',
  styleUrls: ['./app-newaccount.component.css'],
  providers:[LoggingService]
})
export class AppNewaccountComponent {
  constructor(private loggingService: LoggingService, private accountService: AccountService){}

@Input() item: Account;
@Input() id: number;
  setTo(state: string) {

    this.accountService.accounts[this.id].status=state
    this.loggingService.logStatusChange(state)
      console.log(this.id)
  }

}
