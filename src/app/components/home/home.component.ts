import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy{
  private blinkDestroy: any
  private writeNameDestroy: any

  ngAfterViewInit(): void {
    this.blink()
    this.writeLastName()
  }
  ngOnDestroy(): void {
      if(this.blinkDestroy){
        clearInterval(this.blinkDestroy)
      }
      if(this.writeNameDestroy){
        clearInterval(this.writeNameDestroy)
      }
  }
  active: boolean = true
  blink(){
    this.blinkDestroy = setInterval(()=>{
      this.active = !this.active
    }, 500)
  }

  nameOriginal: string = 'Blas';
  nameArray: string[] = this.nameOriginal.split('')
  showName: string = this.nameOriginal
  writeLastName = () => {
    this.writeNameDestroy = setInterval(()=>{
      if(this.nameArray.length === 0){
        this.showName = this.nameOriginal
        this.nameArray = this.nameOriginal.split('')
      } else{
        this.nameArray.pop()
        this.showName = this.nameArray.join('')
      }
    }, 300)
  }

  linkCV: string = 'https://drive.google.com/uc?id=1nPkR3UC0PLGtRYwpltVjT4dz6Qcyfo5S&export=download'
  downLoadCV(){
    const link = document.createElement('a'); 
    link.href = this.linkCV;
    link.click();
  }
}
