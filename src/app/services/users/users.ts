import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  constructor(private http: Http) { }

  createUser(firstName: string, lastName: string, email: string, password: string){
    const payload = {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName
    }
    return this.http.post('http://localhost:3000/users',payload)
      .map(response => response.json());
  }

}
