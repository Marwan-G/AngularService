import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Account} from '../model.component';
@Component({
  selector: 'app-new-account',
  templateUrl: './app-newaccount.component.html',
  styleUrls: ['./app-newaccount.component.css']
})
export class AppNewaccountComponent {
@Input() item: Account;
@Input() id: number;
@Output() status = new EventEmitter<{id:number, newStatus:string}>();
  setTo(state: string) {
    this.status.emit({id:this.id, newStatus: state});
  }
}
