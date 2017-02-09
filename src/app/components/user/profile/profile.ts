import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users/users';

@Component({
  selector: 'profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class UserProfileComponent {
  private currentUser : any;
  private message : any;
  private showAlert = false;
  public isCollapsed: boolean = true;
  constructor(private router: Router, private usersService: UsersService){
    if(localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    }
  }

  closeAlert(){
    this.showAlert = false;
  }
  submitForm(form){
    this.usersService.updateUser(
      this.currentUser.id, form.firstName,
      form.lastName, form.email, form.telephone,
      form.documentType, form.documentNumber
    )
      .subscribe(
      response => this.handleResponse(response),
      error => this.handleError(),
      () => this.handleSuccess()
    );
  }

  private

  handleResponse(response){
    localStorage.setItem('currentUser', JSON.stringify(response));
    this.currentUser = response;
  }

  handleError(){
    this.message = {type: 'danger', data: 'Ha ocurrido un error'};
    this.showAlert = true;
  }

  handleSuccess(){
    this.message = { type: 'success', data: 'Actualizado con exito'};
    this.showAlert = true;
  }

}
