import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }
}
