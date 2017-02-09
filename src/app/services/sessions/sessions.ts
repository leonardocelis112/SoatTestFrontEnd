import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SessionsService {
  constructor(private http: Http) { }

  validateUser(email: string, password: string) {
    return this.http.post('http://localhost:3000/sessions',{email: email, password: password})
      .map(response => response.json());
  }
}
