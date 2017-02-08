import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouter } from './app.router';
import { AlertModule } from 'ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap/collapse';

// Components
import { MainComponent } from './components/main/main';
import { HomeComponent } from './components/home/home';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
