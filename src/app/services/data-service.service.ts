import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Transactions } from '../model/transactions';
import { apiUrl } from 'config';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private http: HttpClient) {}
  //console.log(apiUrl);
  private url: string = apiUrl + 'transactions';

  getTransactions(): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(this.url);
  }
}
