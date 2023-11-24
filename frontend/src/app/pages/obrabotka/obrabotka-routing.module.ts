import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObrabotkaComponent } from './obrabotka.component';

const routes: Routes = [
  {
    path: '',
    component: ObrabotkaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObrabotkaRoutingModule { }
