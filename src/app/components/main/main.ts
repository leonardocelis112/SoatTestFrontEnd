import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss']
})
export class MainComponent {
  public isCollapsed: boolean = true;
  title = 'app works!';
}
