import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserModel } from './models/users.model';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class DropdownService {

  private apiUrl = "http://jsonplaceholder.typicode.com"

  constructor(
    private http: Http
  ) { }

  public getUsersList() : Observable<Array<UserModel>> {
    return this.http.get(`${this.apiUrl}/albums`)
      .map(
      (response) =>
      {
        return response.json();
      }
    )
  }

}
