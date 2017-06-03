import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelectionComponent } from './user-selection.component';
import { UserModel } from '../../shared/models/users.model';

describe('UserSelectionComponent:: UserSelectionComponent ', () => {

  let sut: UserSelectionComponent;
  let fixture: ComponentFixture<UserSelectionComponent>;
  let selectedUserStub: UserModel = {
    userId: 1,
    id: 11,
    title: 'Title User 1'
  } ;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSelectionComponent ],
    });

    fixture = TestBed.createComponent(UserSelectionComponent);
    sut = fixture.componentInstance;
  });

  it('Should set selectedUser and Collapse Dropdown', () =>
    {
      sut.isDropdownOpen = true;

      sut.onUserSelection(selectedUserStub);

      expect(sut.selectedUser).toEqual(selectedUserStub);
      expect(sut.isDropdownOpen).toBeFalsy();
    }
  );

  it('Should clear selectedUser model', () =>
    {
      sut.selectedUser = selectedUserStub;

      sut.onClearUserSelection();

      expect(sut.selectedUser).toBeNull();
    }
  );

  describe('Switch Expanded and Collapsed Dropdown states ', () => {
    it('Should Collapse dropdown on Close', () =>
      {
        sut.isDropdownOpen = true;

        sut.onDropdownToogle();

        expect(sut.isDropdownOpen).toBeFalsy();
      }
    );

    it('Should Expand dropdown on Open', ()=>
      {
        sut.isDropdownOpen = false;

        sut.onDropdownToogle();

        expect(sut.isDropdownOpen).toBeTruthy();
      }
    );
  })

});
