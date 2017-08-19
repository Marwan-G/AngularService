import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AccountComponent} from './account/app.account';
import {AppNewaccountComponent} from './newaccount/app-newaccount.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AppNewaccountComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
