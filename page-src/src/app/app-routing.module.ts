import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/technologies',
    pathMatch: 'full'
  }, {
  	path: 'technologies',
  	component: TechnologiesComponent
  }, {
  	path: 'projects',
  	component: ProjectsComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
  	path: 'contact',
  	component: ContactComponent
  }, { 
    path: '**',
    component: TechnologiesComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
