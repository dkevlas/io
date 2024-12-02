import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../../listProject';
import { Location } from '@angular/common';

@Component({
  selector: 'app-clone',
  templateUrl: './clone.component.html',
  styleUrl: './clone.component.scss'
})
export class CloneComponent {
  project: any | undefined
  notFound: boolean = false
  constructor(private route: ActivatedRoute, private location: Location){}
  
  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('proyecto');
    this.project = projects.find(p => p.idProject === projectId)
    if(!this.project){
      this.notFound = true
    } else {
      document.body.style.overflow = 'hidden'
    }
  }
  active: number = 0
  modeScreen: string[] = [
    'Celular', 'Tablet', 'Escritorio'
  ]
  leftPosition: string = '0px'
  modeCurrent: string = this.modeScreen[0]
  changeMode(i: number): void{
    this.modeCurrent = this.modeScreen[i]
    this.active = i
    this.leftPosition = `-${100 * i}%`
  }
  
  back(){
    this.location.back()
    document.body.style.overflow = 'auto'
  }
}
