import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { UsersAppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

import { DropdownService } from './components/dropdown/dropdown.service';


@NgModule({
  declarations: [
    UsersAppComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    DropdownService
  ],
  bootstrap: [
    UsersAppComponent
  ]
})
export class UsersAppModule { }
