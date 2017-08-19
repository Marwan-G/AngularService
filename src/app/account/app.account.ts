import {Component, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Account} from '../model.component';
@Component({
  selector: ' app-account',
  templateUrl: './app.account.html',
  styleUrls: ['./app.account.css']
})
export class AccountComponent {
  @ViewChild('accountName')  accountNameRef: ElementRef;
  @ViewChild('accountStatus') accountStatusRef: ElementRef;
 @Output()    newaccount = new EventEmitter<Account>();
  onCreateAccount() {
    const name = this.accountNameRef.nativeElement.value;
    const status = this.accountStatusRef.nativeElement.value;

    const newAccount = new Account(name, status);

     this.newaccount.emit(newAccount)
  }
}
