import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiEndpoint } from '../api';
import 'rxjs/add/operator/map';

@Injectable()
export class InsurancesService {
  constructor(private http: Http) { }

  getInsurancesByUserId(userId: string, vehicleRegistrationPlate: string){
    return this.http.get(`${ApiEndpoint}/users/${userId}/soat_insurances?by_registration_plate=${vehicleRegistrationPlate}`)
      .map(response => response.json());
  }

  createSoatInsurance(
    userId: string, vehicleClassId: string,
    vehicleSubTypesId: string, registrationPlate:string,
    vehicleAge: number, numberOfPassengers: number,
    cilinder: number, tons: number
  ){
    const payload = {
      user_id: userId,
      vehicle_class_id: vehicleClassId,
      vehicle_subtype_id: vehicleSubTypesId,
      registration_plate: registrationPlate,
      age: vehicleAge,
      number_of_passengers: numberOfPassengers,
      cilinder: cilinder,
      tons: tons
    }
    return this.http.post(`${ApiEndpoint}/users/${userId}/soat_insurances`,payload)
      .map(response => response.json());
  }

}
