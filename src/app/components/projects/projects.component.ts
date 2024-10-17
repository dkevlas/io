import { Component, OnInit } from '@angular/core';
import { projects, Projects } from './listProject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{

  // projects: Project[] = [
  //   {
  //     title: 'Game Of Thrones',
  //     img: 'https://www.rollingstone.com/wp-content/uploads/2024/08/lisa-blackpink-white-lotus.jpg?w=1581&h=1054&crop=1',
  //     description: 'Lo mejor',
  //     images: [
  //         {
  //           small: 'https://www.rollingstone.com/wp-content/uploads/2024/06/blackpink-lisa-new-single.jpg?w=1581&h=1054&crop=1',
  //           medium: 'https://www.billboard.com/wp-content/uploads/2023/05/Jennie-03-met-gala-2023-billboard-1548.jpg?w=942&h=623&crop=1',
  //           large: 'https://6.soompi.io/wp-content/uploads/image/Rose.jpg?s=900x600&e=t'
  //         }
  //     ],
  //     tecnologia: ['HTML', 'SASS', 'TYPESCRIPT', 'ANGULAR'],
  //     link: 'https://www.marcbacon.com/tools/clamp-calculator/'
  //   },
  //   {
  //     title: 'Your Name',
  //     img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/projects/your-name/original.png',
  //     description: 'Anime',
  //     images: [
  //       {
  //         small: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/projects/your-name/small.png',
  //         medium: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/projects/your-name/medium.png',
  //         large: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/projects/your-name/large.png'
  //       }
  //     ],
  //     tecnologia: ['HTML', 'SASS', 'ANGULAR'],
  //     link: 'https://github.com/dkevlas/YourNameClone.git'
  //   },
  //   {
  //     title: 'Native',
  //     img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/projects/native/original.png',
  //     description: 'Viajes',
  //     images: [
  //       {
  //         small: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/projects/native/small.png',
  //         medium: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/projects/native/medium.png',
  //         large: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/projects/native/large.png'
  //       }
  //     ],
  //     tecnologia: ['HTML', 'SASS'],
  //     link: 'https://github.com/dkevlas/NativeClone.git'
  //   }
  // ]

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
  showImages(project: number){
    //console.log(project)
  }

  //RUTAS VARIABLES

  routeProject(titleId: string): void{
    console.log(titleId)
    this.router.navigate(['/proyectos', titleId])
  }
}
