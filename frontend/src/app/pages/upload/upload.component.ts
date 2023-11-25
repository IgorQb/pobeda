import { Component } from '@angular/core';
import { Destroyer } from '../../base/destroyer';

import { catchError, of, takeUntil } from 'rxjs';
import { UploadServices } from './services/appealsList.services';
import { IAppealsListResponse } from '../../models/home/appeal.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less'],
})
export class UploadComponent extends Destroyer {
  panelOpenState: boolean = false;
  isLoading: boolean = false;
  appealsList: IAppealsListResponse[] = [];

  constructor(
    private _appealService: UploadServices
  ) {
    super();
  }

  sendListAppeal(event: any): void {
    let reader = new FileReader();
    console.log(event.target.files);
    this.isLoading = true;
    this._appealService
      .postAppeal(event.target.files[0])
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
          this.appealsList = response;
        }
        this.isLoading = false;
      });
  }
}
