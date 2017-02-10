import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PaymentsService } from '../../../../services/payments/payments';

@Component({
  selector: 'checkout-user-insurance',
  templateUrl: './checkout-user-insurance.html',
  styleUrls: ['./checkout-user-insurance.scss']
})
export class CheckOutComponent {
  private insuranceId: string;
  private currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentsService: PaymentsService
  ){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.route.snapshot.params['insuranceId']){
      this.insuranceId = this.route.snapshot.params['insuranceId']
    }
  }

  submitForm(form){
    this.paymentsService.createPayment(
      this.insuranceId,
      form.cardNumber,
      form.cardOwnerName,
      form.expirationDate,
      form.securityCode,
      form.numberOfDues
    ).subscribe(
      response => {},
      error => this.handlePaymentSuccess(),
      () =>{ this.handlePaymentSuccess() }
    );
  }

  handlePaymentSuccess(){
    this.router.navigate([`user/${this.currentUser.id}/insurances`, { message: 'Pago Exitoso' }]);
  }

  handlePaymentError(){
    console.log("Error procesando el pago")
  }

}
