import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PaymentsService } from '../../../../services/payments/payments';

@Component({
  selector: 'detail-user-insurance',
  templateUrl: './detail-user-insurance.html',
  styleUrls: ['./detail-user-insurance.scss']
})
export class DetailInsuraceComponent {
  private paymentId: string;
  private payment: any;
  private currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentsService: PaymentsService
  ){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.route.snapshot.params['paymentId']){
      this.paymentId = this.route.snapshot.params['paymentId'];
    }
    this.paymentsService.getPayment(this.paymentId)
      .subscribe(
        response => this.payment = response,
        error => console.log(error),
        () => {}
    );

  }
  isAdmin(){
    if (this.currentUser.roles[0].name === 'admin'){
      return true;
    }else{
      return false;
    }

  }

}
