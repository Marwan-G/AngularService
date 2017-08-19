import { Component, Input} from '@angular/core';
import {Account} from '../model.component';
@Component({
  selector: 'app-new-account',
  templateUrl: './app-newaccount.component.html',
  styleUrls: ['./app-newaccount.component.css']
})
export class AppNewaccountComponent {
@Input() item: Account;
}
