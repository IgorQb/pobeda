import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';

import { catchError, of, takeUntil } from 'rxjs';

import { Destroyer } from '../../base/destroyer';
import { IHome } from '../../models/home/home.model';
import { HomeServices } from './services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTableModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  providers: [HomeServices],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent extends Destroyer implements OnInit {
  tableData: IHome[] = [];
  isLoading: boolean = false;
  displayedColumns: string[] = ['Field1', 'Field2', 'Field3'];

  constructor(private _homeService: HomeServices) {
    super();
  }

  ngOnInit(): void {
    this.getDataForTable();
  }

  getDataForTable(): void {
    this.isLoading = true;
    this._homeService
      .getMultiDomen1()
      .pipe(
        takeUntil(this.destroy$),
        catchError((e) => {
          if (e.error.detail) {
            console.log(e);
          } else {
            console.log(
              'Ошибка',
              'Ошибка при обращении к серверу приложения, пожалуйста, обратитесь к администратору.'
            );
          }
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response) {
          this.tableData = [...response];
        }
        this.isLoading = false;
      });
  }
}
