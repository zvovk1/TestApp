import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { UsersAppComponent } from './app.component';
import { UserSelectionComponent } from './components/user-selection/user-selection.component';

import { AppService } from './app.service';


@NgModule({
  declarations: [
    UsersAppComponent,
    UserSelectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [
    UsersAppComponent
  ]
})
export class UsersAppModule { }
