import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebFilesComponent } from './web-files.component';
import { HomeComponent } from './components/home/home.component';
import { SeoComponent } from './components/seo/seo.component';

const routes: Routes = [
  {
    path:'',
    component:WebFilesComponent,
    children:[
    {
      path:'',
      component:HomeComponent,
    },
    {
      path:'home',
      component:HomeComponent,
    },
    {
      path:'search-engine-optimization',
      component:SeoComponent,
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebFilesRoutingModule { }
