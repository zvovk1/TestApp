import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersAppComponent } from './app.component';
import { UserModel } from './shared/models/users.model';
import { Observable } from 'rxjs';

describe('UsersAppComponent:: UsersAppComponent', () => {

  let sut;

  let appService;
  let UserModelStub: Array<UserModel> = [
    {
      userId: 1,
      id: 11,
      title: 'Title User 1'
    },
    {
      userId: 2,
      id: 22,
      title: 'Title User 2'
    },
    {
      userId: 3,
      id: 33,
      title: 'Title User 3'
    }
  ];

  beforeEach(() => {
    appService = jasmine.createSpyObj('appService', ['getUsersList']);

    TestBed.configureTestingModule({
      declarations: [ UsersAppComponent ],
      providers:    [ appService ],
    });

    appService.getUsersList.and.returnValue(Observable.of(UserModelStub));
    sut = TestBed.createComponent(UsersAppComponent).componentInstance;
  });

  it('When call appService, usersList should be filled via response data list', (done) => {
    appService.getUsersList().subscribe(()=> {
      expect(sut.usersList).toBeDefined();
    })
  });
});

