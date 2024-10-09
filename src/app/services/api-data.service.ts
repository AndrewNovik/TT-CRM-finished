import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  AddAgentForm,
  DataItem,
  exampleData,
} from '../pages/management/management';
import { BaseList } from '../interfaces/main-interfaces-list';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  list = exampleData;
  constructor(private http: HttpClient) {}

  requestGet<T>(
    apiRoute: string,
    payload?: any,
  ): Observable<BaseList<DataItem>> {
    return of({ list: this.list, total: this.list.length });
  }

  requestPost<T>(apiRoute: string, payload: AddAgentForm): Observable<T> {
    this.list.push({
      id: this.list.length + 1,
      login: payload.login,
      email: payload.email,
      phoneNumber: payload.phoneNumber,
      role: payload.role,
      editDate: 0,
      creationDate: +new Date(),
      status: payload.status,
      isHaveEP: payload.isHaveEP,
    });
    return of(true as T);
  }
}
