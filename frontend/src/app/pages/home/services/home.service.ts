import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLs } from '../../../base/urls';
import { IHome } from '../../../models/home/home.model';

@Injectable()
export class HomeServices {
  constructor(private _httpClient: HttpClient) {}

  getMultiDomen1() {
    return this._httpClient.get<IHome[]>(URLs.domen1.method1);
  }

  getSingleDomen1(item: number) {
    return this._httpClient.get<IHome[]>(URLs.domen1.method1 + `/${item}`);
  }

  createUser(item: IHome) {
    return this._httpClient.post(URLs.domen1.method1, item);
  }

  updateDomen1(item: IHome) {
    return this._httpClient.put(URLs.domen1.method1, item);
  }

  deleteDomen1(item: number) {
    return this._httpClient.delete(URLs.domen1.method1 + `/${item}`);
  }
}
