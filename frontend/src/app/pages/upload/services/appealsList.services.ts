import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URLs } from '../../../base/urls';
import { IAppealResponse, IAppealsListResponse } from '../../../models/home/appeal.model';

@Injectable({
  providedIn: 'root',
})
export class UploadServices {
  constructor(private _httpClient: HttpClient) {}

  postAppeal(listAppeal: File) {
    const formData: FormData = new FormData();
    formData.append('appeals', listAppeal);
    return this._httpClient.post<IAppealsListResponse[]>(
      URLs.appeals.getTheClassificationOfAppeals + '/upload',
      formData
    );
  }
}
