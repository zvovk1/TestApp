import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { UserModel } from './shared/models/users.model';


@Component({
  selector: 'users-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class UsersAppComponent implements OnInit {
  public title: string;
  public usersList: Array<UserModel>;

  constructor(
    private appService: AppService
  ) {
    this.title = 'Users Store';
  }

  ngOnInit() {
    this.fetchUsers();
  }

  /*
  **  Fetch Users Models from server;
  */
  private fetchUsers() : void {
    this.appService.getUsersList()
      .subscribe(
      (response: Array<UserModel>) =>
      {
        this.usersList = response;
      }
    )
  }
}
