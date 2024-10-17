import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
import { BaseModule } from '../../base/base.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    BaseModule
  ],
})
export class ProjectsModule { }
