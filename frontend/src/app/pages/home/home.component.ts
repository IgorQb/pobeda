import { Component, OnInit } from '@angular/core';

import { catchError, of, takeUntil } from 'rxjs';

import { Destroyer } from '../../base/destroyer';
import { HomeServices } from './services/home.service';
import { IApeal } from '../../models/home/appeal.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent extends Destroyer implements OnInit {
  // tableData: IApeal[] = [{
  //   'appealGroup': 'Тест',
  //   'appealSubGroup': 'Тест под. группы',
  //   'appealText': 'Тест текста обращенийeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeу'
  // },
  // {
  //   'appealGroup': 'Тест',
  //   'appealSubGroup': 'Тест под. группы',
  //   'appealText': 'Тест текста обращений'
  // }];
  isLoading: boolean = false;
  displayedColumns: string[] = ['Field1', 'Field2', 'Field3'];

  constructor(private _homeService: HomeServices) {
    super();
  }

  test(): void {
    console.log(1)
  }

  ngOnInit(): void {
    // this.getDataForTable();
  }

  // getDataForTable(): void {
  //   this.isLoading = true;
  //   this._homeService
  //     .getMultiDomen1()
  //     .pipe(
  //       takeUntil(this.destroy$),
  //       catchError((e) => {
  //         if (e.error.detail) {
  //           console.log(e);
  //         } else {
  //           console.log(
  //             'Ошибка',
  //             'Ошибка при обращении к серверу приложения, пожалуйста, обратитесь к администратору.'
  //           );
  //         }
  //         return of(null);
  //       })
  //     )
  //     .subscribe((response) => {
  //       if (response) {
  //         this.tableData = [...response];
  //       }
  //       this.isLoading = false;
  //     });
  // }
}
