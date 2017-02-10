import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouter } from './app.router';
import { AlertModule } from 'ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { SessionsService } from './services/sessions/sessions';
import { EmmiterService } from './services/emmiters/emmiter';
import { UsersService } from './services/users/users';
import { VehiclesService } from './services/vehicles/vehicles';
import { InsurancesService } from './services/insurances/insurances';
import { PaymentsService } from './services/payments/payments';

// Components
import { MainComponent } from './components/main/main';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { ListUserInsurancesComponent } from './components/user/insurances/list/list-user-insurances';
import { CreateInsuranceUsersComponent } from './components/user/insurances/create/create-user-insurance';
import { UserProfileComponent } from './components/user/profile/profile';
import { CheckOutComponent } from './components/user/insurances/checkout/checkout-user-insurance';
import { DetailInsuraceComponent } from './components/user/insurances/detail/detail-user-insurance';
import { ListAdminInsurancesComponent } from './components/admin/insurances/list/list-admin-insurances';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListUserInsurancesComponent,
    CreateInsuranceUsersComponent,
    UserProfileComponent,
    CheckOutComponent,
    DetailInsuraceComponent,
    ListAdminInsurancesComponent
  ],
  imports: [
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter
  ],
  providers: [
    SessionsService, EmmiterService, UsersService,
    VehiclesService, InsurancesService,
    PaymentsService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
