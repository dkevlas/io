import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit, OnDestroy{
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

  linkCV: string = 'https://drive.google.com/uc?id=1r4JIch_s6YbLsn7CP1k1FRVO5nzexq1J&export=download'
  downLoadCV(){
    const link = document.createElement('a'); 
    link.href = this.linkCV;
    link.click();
  }
}
