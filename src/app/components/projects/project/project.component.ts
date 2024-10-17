import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { projects } from '../listProject';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {

  // prueba{
  //   @Input()
  //   title: string = ''
  
  //   @Input()
  //   description: string = ''
  
  //   @Input()
  //   img: string = ''
  
  //   @Input()
  //   tecnologia: string[] = []
  
  //   @Input()
  //   link: string = ''
  
  //   @Input()
  //   btn: any
  
  //   @Input()
  //   images: any[] = []
  
  //   inputImg: any
  //   ngOnInit(): void {
  //       const inputImages = this.images
  //       this.inputImg = inputImages
  //       this.imgCurrent = this.inputImg[0].small
  //   }
    
  //   imgCurrent: string = ''
  //   btns(){
  //     const imgSmall = this.inputImg[0].small
  //     const imgMedium = this.inputImg[0].medium
  //     const imgLarge = this.inputImg[0].large
  //     if(this.imgCurrent == imgSmall){
  //       this.imgCurrent = imgMedium
  //     } else if (this.imgCurrent == imgMedium){
  //       this.imgCurrent = imgLarge
  //     } else if (this.imgCurrent == imgLarge){
  //       this.imgCurrent = imgSmall
  //     }
  //   }
  // }

  project: any | undefined
  notFound: boolean = false
  constructor(private route: ActivatedRoute, private router: Router){}
  
  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('proyecto');
    this.project = projects.find(p => p.idProject === projectId)
    if(!this.project){
      console.log('No exsites')
      this.notFound = true
    }
  }

}