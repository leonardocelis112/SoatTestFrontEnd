import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiEndpoint } from '../api';

@Injectable()
export class SessionsService {
  constructor(private http: Http) { }

  validateUser(email: string, password: string) {
    return this.http.post(`${ApiEndpoint}/sessions`,{email: email, password: password})
      .map(response => response.json());
  }
}
