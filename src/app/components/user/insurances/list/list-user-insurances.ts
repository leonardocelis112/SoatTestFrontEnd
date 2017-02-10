import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { InsurancesService } from '../../../../services/insurances/insurances';

@Component({
  selector: 'list-user-insurances',
  templateUrl: './list-user-insurances.html',
  styleUrls: ['./list-user-insurances.scss']
})
export class ListUserInsurancesComponent {
  private alertMessage: any;
  private showAlert: boolean = false;
  private currentUser: any;
  private insurances: [any];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private insurancesService: InsurancesService
  ){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.route.snapshot.params['message']){
      this.alertMessage = { type:'success', data: this.route.snapshot.params['message']};
      this.showAlert = true;
    }
    this.insurancesService.getInsurancesByUserId(this.currentUser.id,'')
      .subscribe(
        response => this.insurances = response,
        error => console.log(error),
        () => {}
    );

  }

}
