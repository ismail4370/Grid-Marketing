import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: '',
  loadChildren: () => import('./web-files/web-files.module').then((m) => m.WebFilesModule),
},
{
  path: 'web-files',
  loadChildren: () => import('./web-files/web-files.module').then((m) => m.WebFilesModule),
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
