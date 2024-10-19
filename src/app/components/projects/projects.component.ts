import { Component, OnInit } from '@angular/core';
import { projects, Projects } from './listProject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{

  constructor(private router: Router){}

  allProjects: Projects[] = projects

  showProjects: Projects[] = []
  
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
