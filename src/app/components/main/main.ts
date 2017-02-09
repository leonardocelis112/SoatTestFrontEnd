import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmmiterService } from '../../services/emmiters/emmiter';

@Component({
  selector: 'main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss']
})
export class MainComponent {
  private currentUser : any
  public isCollapsed: boolean = true;
  constructor(private router: Router, private emmiter: EmmiterService){
    if(localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    }
    emmiter.eventEmmited$.subscribe(user => this.currentUser = user);
  }

  isAdmin(){
    if (this.currentUser != undefined){
      if (this.currentUser.roles[0].name === 'admin'){
        return true;
      }
      else{
        return false;
      }
    }else{
      return false;
    }
  }

  logout(){
    this.currentUser = null;
    this.router.navigate(['login']);
    localStorage.removeItem('currentUser');
  }
}
