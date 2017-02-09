import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiEndpoint } from '../api';
import 'rxjs/add/operator/map';

@Injectable()
export class VehiclesService {
  constructor(private http: Http) { }

  getAllVehicleClasses(){
    return this.http.get(`${ApiEndpoint}/vehicle_classes`)
      .map(response => response.json());
  }

}
