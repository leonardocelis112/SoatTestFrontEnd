import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehiclesService } from '../../../../services/vehicles/vehicles';
import { InsurancesService } from '../../../../services/insurances/insurances';

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
  private vehicleClasses: [any];
  private vehicleSubTypes: [any];
  constructor(
    private router: Router,
    private vehicleService : VehiclesService,
    private insurancesService : InsurancesService
  ){
    this.vehicleService.getAllVehicleClasses()
      .subscribe(
      response => this.vehicleClasses = response,
      error => console.log(error),
      () =>{}
    );
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
  onChangeRegistrationPlate(plateValue){
    this.insurancesService.getInsurancesByUserId(this.currentUser.id, plateValue)
      .subscribe(
      response => this.verifyPlateUniqueness(response),
      error => console.log(error),
      () =>{}
    );
  }

  verifyPlateUniqueness(response){
    if (response.length > 0){
      this.showAlert = true;
      this.alertMessage = { type: 'warning', data: 'Esta placa ya tiene un seguro si compra otro la vigencia sera apartir de que expire el actual'};
    }
    else{
      this.showAlert = false;
    }
  }

  handleOnVehicleClassChange(vehicleClassId){
    this.findType(Number.parseInt(vehicleClassId));
  }
  submitForm(form){
    this.insurancesService.createSoatInsurance(
      this.currentUser.id, form.vehicleClass, form.vehicleSubType,
      form.registrationPlate, form.age, form.numberOfPassengers,
      form.cilinder, form.tons
    )
    .subscribe(
      response => {},
      error => this.handleErrorSoatInsuranceCreation(),
      () =>{ this.handleSuccessSoatInsuranceCreation() }
    );
  }

  handleSuccessSoatInsuranceCreation(){
    this.router.navigate([`user/${this.currentUser.id}/insurances`, { message: 'Seguro creado con éxito proceda a pagar' }]);
  }

  handleErrorSoatInsuranceCreation(){
    this.showAlert = true;
    this.alertMessage = { type: 'danger', data: 'Un error ha ocurrido en la creación del seguro'};
  }

  closeAlert(){
    this.showAlert = false;
  }

  private findType (vehicleClassId){
    const vehicleClass = this.vehicleClasses.filter((klass)=>{
      return klass.id === vehicleClassId
    })[0];
    this.vehicleSubTypes = vehicleClass.vehicle_subtypes;
  }
}
