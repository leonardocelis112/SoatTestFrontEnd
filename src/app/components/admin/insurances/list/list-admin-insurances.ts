import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PaymentsService } from '../../../../services/payments/payments';

@Component({
  selector: 'list-admin-insurances',
  templateUrl: './list-admin-insurances.html',
  styleUrls: ['./list-admin-insurances.scss']
})
export class ListAdminInsurancesComponent {
  private payments: [any];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentsService: PaymentsService
  ){
    this.paymentsService.getPayments()
      .subscribe(
        response => this.payments = response,
        error => console.log(error),
        () => {}
    );

  }

}
