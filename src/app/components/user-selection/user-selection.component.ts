import { Component, Input, ElementRef } from '@angular/core';
import { UserModel } from '../../shared/models/users.model';

@Component({
  selector: 'user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.less'],
  host: {
    '(document:click)': 'onOutsideClick($event)'
  }
})
export class UserSelectionComponent {

  @Input()
  usersList: Array<UserModel>;

  public selectedUser: UserModel;
  public isDropdownOpen: boolean;

  constructor(
    private elementReference: ElementRef
  ) {}

  /*
  **  When user was selected from Dropdown list, set it into selectedUser model and Collapse Dropdown;
  */
  public onUserSelection(user: UserModel) : void {
    this.selectedUser = user;
    this.dropdownCollapse();
  }

  /*
  **  Clear selectedUser model;
  */
  public onClearUserSelection() : void {
    this.selectedUser = null;
  }

  /*
  **  Switch Expanded and Collapsed Dropdown states;
  */
  public onDropdownToogle() : void {
    if(!!this.isDropdownOpen) {
      this.dropdownCollapse();
    } else {
      this.dropdownExpand();
    }
  }

  /*
  **  Set Dropdown state to Expand
  */
  private dropdownExpand() : void {
    const state: boolean = true;
    this.isDropdownOpen = state;
  }

  /*
  **  Set Dropdown state to Collapse
  */
  private dropdownCollapse() {
    const state: boolean = false;
    this.isDropdownOpen = state;
  }

  /*
  **  Collapse Dropdown when click outside of Dropdown and Clear button;
  */
  private onOutsideClick(event) : void {
    if (!this.elementReference.nativeElement.firstElementChild.contains(event.target)) {
      this.dropdownCollapse();
    }
  }

}
