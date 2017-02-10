import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'checkout/:insuranceId', component: CheckOutComponent },
  { path: 'payment_detail/:paymentId', component: DetailInsuraceComponent },
  { path: 'admin/payments', component: ListAdminInsurancesComponent },
  { path: 'user/:id/insurances', component: ListUserInsurancesComponent },
  { path: 'user/:id/insurances/create', component: CreateInsuranceUsersComponent },
  { path: 'crisis-center', component: MainComponent },
  { path: 'hero/:id',      component: MainComponent },
  {
    path: 'heroes',
    component: MainComponent,
    data: { title: 'Heroes List' }
  },
  { path: '', component: HomeComponent},
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRouter { }
