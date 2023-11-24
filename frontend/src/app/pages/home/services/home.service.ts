import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLs } from '../../../base/urls';
import { IHome } from '../../../models/home/home.model';

@Injectable()
export class HomeServices {
  constructor(private _httpClient: HttpClient) {}

  getTheClassificationOfAppeals() {
    return this._httpClient.get<IHome[]>(URLs.appeals.getTheClassificationOfAppeals);
  }
}
