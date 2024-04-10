import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { HOT_BASE } from '../../app.constants';

@Injectable({ providedIn: 'root' })
export class MatchingService {
  hostBase = HOT_BASE;
  list: any[] = [];
  constructor(
    private http: HttpClient,
    private applicationConfigService: ApplicationConfigService,
  ) {
    const fakeContent = [
      'Emerald and Diamond Ring in 18k White Gold',
      'CARTIER 22 autumn and winter women\'s ring Bague Panthere de Cartier',
      'SalvatoreFerragamo/Ferragamo men\'s leather pin buckle double-sided belt belt 679781',
      'Ebo Explorer Series 19108236'
    ];

    const fakeDetail = [
      'From the G-Timeless Collection',
      'Water resistant to 50 metres',
      'Round goldtone stainless steel case, 38mm (1.5")',
      'Goldtone Diamante pattern dial',
      'Date window at 6 o\'clock',
      'Goldtone stainless steel bracelet',
      'Made in Italy'
    ]
    this.list = this.fakeArray(9).map((_, index) => ({
      img: `content/images/item${index+1}.jpg`,
      title: fakeContent[this.randomBetween1And4()],
      price: 32423.00,
      id: index,
      detail: fakeDetail
    }));
  }


  getProducts(): Observable<any> {
    return this.http.get(this.hostBase + '/products', {observe: 'response'});
  }

  getDetailItem(id: number): Observable<any> {
    return this.http.get(`${this.hostBase}/products/${id}` , {observe: 'response'});
  }

  randomBetween1And4(): number {
    return Math.floor(Math.random() * 3);
  }
  fakeArray(length: number): any[] {
    return new Array(length).fill(null);
  }

  order(body: any): Observable<any> {
    return this.http.post(`${this.hostBase}/order/store` , body ,{observe: 'response'});
  }
}
