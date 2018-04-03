import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

const url = 'http://localhost:61566/users/';

@Injectable()
export class UserService {

  List(): Observable<User[]> {
    return this.http.get( url +  'List' ) as Observable<User[]>;
  }
  Get(Id: string): Observable<User> {
    return this.http.get(url + 'Get/' + Id) as Observable<User>;
  }
  Create(user: User): Observable<any> {
    return this.http.post(url + 'Create', user) as Observable<any>;
  }
  Change(user: User): Observable<any> {
    return this.http.post(url + 'Change', user) as Observable<any>;
  }
  Remove(user: User): Observable<any> {
    return this.http.post(url + 'Remove', user) as Observable<any>;
  }


  constructor( private http: HttpClient) { }

}

// logging():void {
//  this.UserSvc.Login(this.user.UserName, this.user.Password)
// }
