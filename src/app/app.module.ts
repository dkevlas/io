import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsModule } from './components/projects/projects.module';
import { HomeModule } from './components/home/home.module';
import { BaseModule } from './base/base.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    HomeModule,
    BaseModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
