import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  nav: boolean = true
  menuNav: boolean = true
  modeMobile: boolean = true;
  modeDesktop: boolean = false;
  active: boolean = false;

  ngOnInit(): void{
    this.screenSize()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void{
    this.screenSize()
  }

  screenSize(){
    const screem = window.matchMedia('(min-width: 1024px)').matches;
    if(screem){
      this.active = false
      this.modeMobile = false
      this.modeDesktop = true
    } else{
      this.modeMobile = true
      this.modeDesktop = false
    }
  }

  leftNavMobile: string = '-200px'

  menuToggle(){
    this.active = !this.active
    if(this.active){
      if(this.active && this.leftNavMobile == '0px' ){
        this.leftNavMobile = '-200px'
        this.active = !this.active
      } else{
        this.leftNavMobile = '0px' 
      }
    } else{
        this.leftNavMobile = '-200px'
    }
  }

  clickMenu(){
    this.leftNavMobile = '-200px'
    this.active = !this.active
  }
}
