import { Component } from '@angular/core';
import { projectsFull, ProjectsFull } from '../listProjectFull';

@Component({
  selector: 'app-project-full',
  templateUrl: './project-full.component.html',
  styleUrl: './project-full.component.scss'
})
export class ProjectFullComponent {
  listProjectFull: ProjectsFull[] =  projectsFull;

  clickLinkWeb(link: string | undefined){
    window.open(link, '_blank')
  }
  clickLinkRepo(link: string | undefined){
    window.open(link, '_blank')
  }
}
