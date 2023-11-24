import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destroyer } from '../../app/base/destroyer';
import { MatTableModule } from '@angular/material/table';
import { IAppeal } from './types/appeal.types';

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

  @Input() tableData: IAppeal[] = [];

  displayedColumns: string[] = ['appealText', 'appealGroup', 'appealSubGroup'];

  constructor() {
    super();
  }
}
