import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { HOT_BASE } from '../../../app.constants';

@Injectable({ providedIn: 'root' })
export class DetailBillsService {
  hostBase = HOT_BASE;
  constructor(
    private http: HttpClient,
    private applicationConfigService: ApplicationConfigService,
  ) {}
  getOrders(): Observable<any> {
    return this.http.get(`${this.hostBase}/orders` , {observe: 'response'});
  }
  getDeposits(): Observable<any> {
    return this.http.get(`${this.hostBase}/user/deposits` , {observe: 'response'});
  }
  getWithdrawals(): Observable<any> {
    return this.http.get(`${this.hostBase}/user/withdrawals` , {observe: 'response'});
  }
}
