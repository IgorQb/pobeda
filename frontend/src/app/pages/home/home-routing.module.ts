import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'obrabotka',
    loadChildren: () => import('../obrabotka/obrabotka.module').then(m => m.ObrabotkaModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('../upload/upload.module').then(m => m.UploadModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
