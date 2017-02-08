import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { ListUserInsurancesComponent } from './components/user/insurances/list/list-user';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user/:id/insurances', component: ListUserInsurancesComponent},
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
