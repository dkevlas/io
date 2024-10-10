import { Component } from '@angular/core';

interface Item {
  name: string,
  img: string
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  items: Item[] = [
    {
      name: 'HTML5',
      img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/html-5.png'
    },
    {
      name: 'CSS3',
      img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/css-3.png'
    },
    {
      name: 'SASS',
      img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/sass.png'
    },
    {
      name: 'JavaScript',
      img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/javascript.png'
    },
    {
      name: 'TypeScript',
      img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/typescript.png',
    },
    {
      name: 'Angular',
      img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/angular.png'
    }
  ]

  items2: Item[] = [
    {
      name: 'Ilustrator',
      img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/ilustrador.png'
    },
    {
      name: 'Photoshop',
      img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/photoshop.png'
    },
    {
      name: 'S3',
      img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/simple-storage-service.png'
    },
    {
      name: 'Linux',
      img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/linux.png'
    },
    {
      name: 'Git',
      img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/git.png'
    },
    {
      name: 'GitHub',
      img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/io/skills/github.png'
    }
  ]

  item: boolean = true
  indexFrontend: number | undefined
  indexHerramientas: number | undefined

  event(n: number){
    this.indexFrontend = n
  }
  mouseIn(n: number){
    this.event(n)
  }
  mouseOut(n: number){
    this.indexFrontend = undefined
  }
  event2(n: number){
    this.indexHerramientas = n
  }
  mouseIn2(n: number){
    this.event2(n)
  }
  mouseOut2(n: number){
    this.indexHerramientas = undefined
  }
}
