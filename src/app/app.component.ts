import { Component } from '@angular/core';
import {Account} from './model.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      accounts: Account[] = [
        new Account(  'Marwan account',  'active'),
        new Account(  'ghabin account',  'inactive'),
        new Account(  'ghabin account',  'inactive'),
      ];

        onAccountAdded(newac: Account ) {
        this.accounts.push(newac);
       }
       onStatuschange( updateinfo: {id: number, newStatus: string}) {

       this.accounts[updateinfo.id].status = updateinfo.newStatus;

       }
      constructor() {

      }

 }

