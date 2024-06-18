import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { HOT_BASE } from '../../app.constants';

@Injectable({ providedIn: 'root' })
export class VoucherService {
  hostBase = HOT_BASE;
  constructor(
    private http: HttpClient,
  ) {

  }


  getProducts(id: string): Observable<any> {
    return this.http.get(this.hostBase + `/products/${id}`, {observe: 'response'});
  }
  history(): Observable<any> {
    return this.http.get(this.hostBase +'/order', {observe: 'response'});
  }


  order(body: any): Observable<any> {
    return this.http.post(`${this.hostBase}/order/store` , body ,{observe: 'response'});
  }

}
