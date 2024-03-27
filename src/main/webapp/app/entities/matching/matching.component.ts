import { Component } from '@angular/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
  selector: 'jhi-matching',
  standalone: true,
  imports: [
    NzButtonComponent
  ],
  templateUrl: './matching.component.html',
  styleUrl: './matching.component.scss'
})
export class MatchingComponent {
  productList: any[] = [];

  fakeContent = [
    'Emerald and Diamond Ring in 18k White Gold',
    'CARTIER 22 autumn and winter women\'s ring Bague Panthere de Cartier',
    'SalvatoreFerragamo/Ferragamo men\'s leather pin buckle double-sided belt belt 679781',
    'Ebo Explorer Series 19108236'
  ]

  constructor() {
    this.productList = this.fakeArray(9).map((_, index) => ({
      img: `content/images/item${index+1}.jpg`,
      des: this.fakeContent[this.randomBetween1And4()],
      price: 32423.00
    }));
  }

  randomBetween1And4() {
    return Math.floor(Math.random() * 3);
  }
  fakeArray(length: number): any[] {
    return new Array(length).fill(null);
  }
}
