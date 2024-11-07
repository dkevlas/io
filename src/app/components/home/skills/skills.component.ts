import { Component } from '@angular/core';
import { backend, frontend, Logo, tools } from './dataLogos';

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

  logos: Logo[][] = [frontend, backend, tools];

  inSkill(element: HTMLElement){
    element.style.filter = 'grayscale(0)'
  }
  outSkill(element: HTMLElement){
    element.style.filter = 'grayscale(1)'
  }
}
