import { Component } from '@angular/core';
import { Host } from '@angular/core';
import { Router } from '@angular/router';
import { SessionsService } from '../../services/sessions/sessions';
import { EmmiterService } from '../../services/emmiters/emmiter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  people: any;
  response:any;
  showAlert: boolean = false;
  alertType: string;
  constructor(
    private sessionsService: SessionsService,
    private emmiter: EmmiterService,
    private router: Router,
    private route: ActivatedRoute,
  ){
    if (this.route.snapshot.params['message']){
      this.response = { message: this.route.snapshot.params['message']};
      this.alertType= "success"
      this.showAlert = true;
    }
  }

  submitForm(form: any): void{
    this.sessionsService.validateUser(form.email, form.password)
      .subscribe(
        response => this.response = response,
        error => this.handleError(error),
        () => this.handleRedirect()
      );
  }
  handleError(error: any){
    this.showAlert = true;
    this.alertType = "danger";
    this.response = JSON.parse(error._body);
  }

  handleRedirect(){
    this.emmiter.emit(this.response);
    this.saveUserInfo();
    if (this.response.roles[0].name === 'admin'){
      this.router.navigate(['admin/payments']);
    }else{
      this.router.navigate([`user/${this.response.id}/insurances`]);
    }
  }

  private saveUserInfo (){
    localStorage.setItem('currentUser', JSON.stringify(this.response));
  }




}
