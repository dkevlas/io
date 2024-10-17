import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
import { NotFoundComponent } from '../../base/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: ':proyecto',
    component: ProjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
