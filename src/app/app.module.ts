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

// Components
import { MainComponent } from './components/main/main';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { ListUserInsurancesComponent } from './components/user/insurances/list/list-user';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListUserInsurancesComponent
  ],
  imports: [
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter
  ],
  providers: [SessionsService, EmmiterService, UsersService],
  bootstrap: [MainComponent]
})
export class AppModule { }
