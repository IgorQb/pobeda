import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { catchError, of, takeUntil } from 'rxjs';

import { Destroyer } from '../../base/destroyer';
import { ObrabotkaService } from './services/appeal.service';
import { IApeal, IAppealResponse } from '../../models/home/appeal.model';
import { ObrabotkaModalComponent } from './obrabotka-modal/obrabotka-modal.component';

@Component({
  selector: 'app-obrabotka',
  templateUrl: './obrabotka.component.html',
  styleUrls: ['./obrabotka.component.less'],
})
export class ObrabotkaComponent extends Destroyer {
  appeal: IApeal = { appealText: '' };
  isLoading: boolean = false;

  constructor(
    private _appealService: ObrabotkaService,
    public dialog: MatDialog,
  ) {
    super();
  }

  sendAppeal() {
    this.isLoading = true;
    this._appealService
      .postAppeal(this.appeal)
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
          this.onOpenModal(response)
        }
        this.isLoading = false;
      });
  }

  onOpenModal(appeal: IAppealResponse): void {
    this.dialog.open(ObrabotkaModalComponent, {
      data: appeal
    });
  }
}
