import { Component } from '@angular/core';
import { UsersService } from '../../services/users/users';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {
  private response: any;
  constructor (
    private userService : UsersService,
    private router: Router
  ){

  }
  submitForm(form: any): void{
    this.userService.createUser(
      form.firstName,
      form.lastName,
      form.email,
      form.password
    ).subscribe(
      response => this.response = response,
      error => console.log(error),
      () => this.handleSuccess()
    );
  }

  handleSuccess(){
    this.router.navigate(['login',{ message: 'Se ha registrado satisfactoriamente' }]);
  }
}
