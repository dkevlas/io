import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  isActive: boolean = false;

  showInfo(){
    this.isActive = !this.isActive;
  };
}
