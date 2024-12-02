import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { BaseModule } from '../../base/base.module';
import { ProjectCloneComponent } from './project-clone/project-clone.component';
import { ProjectFullComponent } from './project-full/project-full.component';
import { CloneComponent } from './project-clone/clone/clone.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCloneComponent,
    ProjectFullComponent,
    CloneComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    BaseModule
  ],
})
export class ProjectsModule { }
