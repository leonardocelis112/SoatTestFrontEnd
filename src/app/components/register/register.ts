import { Component } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }
}
