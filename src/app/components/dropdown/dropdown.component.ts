import { Component, OnInit } from '@angular/core';
import { DropdownService } from './dropdown.service';
import { UserModel } from './models/users.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit {

  public users: Array<UserModel>;
  public selectedUser: UserModel;

  constructor(
    private dropdownService: DropdownService
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  public onUserSelection(user: UserModel) : void {
    this.selectedUser = user;
  }

  public onClearUserSelection() : void {
    this.selectedUser = null;
  }

  private fetchUsers() : void {
    this.dropdownService.getUsersList()
      .subscribe(
        (response: Array<UserModel>) =>
        {
          this.users = response;
        }
      )
  }

}
