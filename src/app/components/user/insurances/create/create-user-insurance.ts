import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'create-user-insurance',
  templateUrl: './create-user-insurance.html',
  styleUrls: ['./create-user-insurance.scss']
})
export class CreateInsuranceUsersComponent {
  private currentUser : any
  public isCollapsed: boolean = true;
  private showAlert: boolean = false;
  private alertMessage: any;
  constructor(private router: Router){
    if(localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    }
    this.checkRequiredPrefillData();
  }
  checkRequiredPrefillData(){
    if (
      !(
        this.currentUser.email &&
        this.currentUser.telephone &&
        this.currentUser.document_type &&
        this.currentUser.document_number &&
        this.currentUser.first_name &&
        this.currentUser.last_name
      )
    ){
      this.showAlert = true;
      this.alertMessage = { type: 'danger', data: 'Por favor completa tu perfil en la sección perfil'};
    }
  }
  closeAlert(){
    this.showAlert = false;
  }
}
