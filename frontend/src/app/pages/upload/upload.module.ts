import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { UploadServices } from './services/appealsList.services';
import { TableComponent } from '../../../shared/table/table.component';

@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    RouterModule,
    MatExpansionModule,
    TableComponent
  ],
  providers: [
    UploadServices
  ]
})
export class UploadModule { }