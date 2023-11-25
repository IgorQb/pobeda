import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { Destroyer } from '../../app/base/destroyer';
import { IAppealResponse, IAppealsListResponse } from '../../app/models/home/appeal.model';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.less',
})
export class TableComponent extends Destroyer {

  @Input() tableData: IAppealsListResponse[] = [];

  displayedColumns: string[] = ['appealText', 'appealGroup', 'appealSubGroup'];

  constructor() {
    super();
  }
}
