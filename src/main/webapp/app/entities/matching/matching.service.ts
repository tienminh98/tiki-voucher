import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ApplicationConfigService } from 'app/core/config/application-config.service';

@Injectable({ providedIn: 'root' })
export class MatchingService {
  constructor(
    private http: HttpClient,
    private applicationConfigService: ApplicationConfigService,
  ) {}

  getProducts(): Observable<{}> {
    const fakeContent = [
      'Emerald and Diamond Ring in 18k White Gold',
      'CARTIER 22 autumn and winter women\'s ring Bague Panthere de Cartier',
      'SalvatoreFerragamo/Ferragamo men\'s leather pin buckle double-sided belt belt 679781',
      'Ebo Explorer Series 19108236'
    ]
    const list = this.fakeArray(9).map((_, index) => ({
      img: `content/images/item${index+1}.jpg`,
      des: fakeContent[this.randomBetween1And4()],
      price: 32423.00
    }));
   /* return this.http.get(this.applicationConfigService.getEndpointFor('api/activate'), {
      params: new HttpParams().set('key', key),
    });*/
    return of(list);
  }

  randomBetween1And4(): number {
    return Math.floor(Math.random() * 3);
  }
  fakeArray(length: number): any[] {
    return new Array(length).fill(null);
  }
}
