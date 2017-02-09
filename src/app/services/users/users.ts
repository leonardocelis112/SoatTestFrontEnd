import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiEndpoint } from '../api';
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
    return this.http.post(`${ApiEndpoint}/users`,payload)
      .map(response => response.json());
  }

  updateUser(id:string, firstName: string, lastName: string,
             email: string, telephone: string,
             documentType: string, documentNumber: string){
   const payload = {
     email: email,
     first_name: firstName,
     last_name: lastName,
     telephone: telephone,
     document_type: documentType,
     document_number: documentNumber
   }
   return this.http.put(`${ApiEndpoint}/users/${id}`,payload)
     .map(response => response.json());
  }

}
