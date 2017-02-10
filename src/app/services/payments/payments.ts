import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiEndpoint } from '../api';
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentsService {
  constructor(private http: Http) { }

  getPayments(){
    return this.http.get(`${ApiEndpoint}/payments`)
      .map(response => response.json());
  }

  getPayment(paymentId){
    return this.http.get(`${ApiEndpoint}/payments/${paymentId}`)
      .map(response => response.json());
  }

  createPayment(
    insuranceId: string, cardNumber: string,
    cardOwnerName: string, expirationDate:string,
    securityCode: number, numberOfDues: number
  ){
    const payload = {
      soat_insurance_id: insuranceId,
      credit_card_number: cardNumber,
      credit_card_owner_name: cardOwnerName,
      expiration_date: expirationDate,
      security_code: securityCode,
      number_of_dues: numberOfDues,
    }
    return this.http.post(`${ApiEndpoint}/payments`,payload)
      .map(response => response.json());
  }

}
