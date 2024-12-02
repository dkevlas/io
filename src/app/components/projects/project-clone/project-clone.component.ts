import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects, projects } from '../listProject';

@Component({
  selector: 'app-project-clone',
  templateUrl: './project-clone.component.html',
  styleUrl: './project-clone.component.scss'
})
export class ProjectCloneComponent implements OnInit {
  allProjects: Projects[] = projects

  showProjects: Projects[] = []
  constructor(private router: Router, private location: Location){}

  ngOnInit(): void {
    for(let i = 0; i < this.initShowProject; i++){
      this.showProjects.push(this.allProjects[i])
    }
  }
  initShowProject: number = 2 //Valor para que inicie y se muestre
  hiddenButton: boolean = false
  addProject: number = this.initShowProject

  loadMore(){
    for(let i = 0; i < this.initShowProject; i++){
      this.addProject += 1
      this.showProjects.push(this.allProjects[this.addProject - 1])
      if(this.addProject == this.allProjects.length){
        this.hiddenButton = true
        break
      }
    }
  }
  //RUTAS VARIABLES

  routeProject(titleId: string): void{
    this.router.navigate(['/proyectos', titleId])
  }
}
