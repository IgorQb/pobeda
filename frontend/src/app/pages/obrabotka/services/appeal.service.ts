import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URLs } from '../../../base/urls';
import { IApeal, IAppealResponse } from '../../../models/home/appeal.model';

@Injectable({
  providedIn: 'root',
})
export class ObrabotkaService {
  constructor(private _httpClient: HttpClient) {}

  postAppeal(appeal: IApeal) {
    return this._httpClient.post<IAppealResponse>(
      URLs.appeals.getTheClassificationOfAppeals,
      { ...appeal } 
    );
  }
}
