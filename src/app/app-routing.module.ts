import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './base/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./components/home/home.module').then(module => module.HomeModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./components/projects/projects.module').then(module => module.ProjectsModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
