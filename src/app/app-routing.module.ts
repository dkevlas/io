import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './base/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'inicio',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./components/projects/projects.module').then(module => module.ProjectsModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./components/contact/contact.module').then(module => module.ContactModule)
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
