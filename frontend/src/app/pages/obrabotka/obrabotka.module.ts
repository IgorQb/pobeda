import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

import { ObrabotkaRoutingModule } from './obrabotka-routing.module';
import { ObrabotkaComponent } from './obrabotka.component';
import { FormsModule } from '@angular/forms';
import { ObrabotkaService } from './services/appeal.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ObrabotkaModalComponent } from './obrabotka-modal/obrabotka-modal.component';


@NgModule({
  declarations: [
    ObrabotkaComponent
  ],
  imports: [
    CommonModule,
    ObrabotkaRoutingModule,
    RouterModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    ObrabotkaModalComponent
  ],
  providers: [
    ObrabotkaService
  ]
})
export class ObrabotkaModule { }