import {Account} from "../model.component"
export  class AccountService{
  accounts: Account[] = [
    new Account(  'Marwan account',  'active'),
    new Account(  'ghabin account',  'inactive'),
    new Account(  'ghabin account',  'inactive'),
  ];
}
