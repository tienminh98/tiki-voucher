import { Component } from '@angular/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import { MatchingService } from './matching.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'jhi-matching',
  standalone: true,
  imports: [
    NzButtonComponent,
    RouterLink
  ],
  templateUrl: './matching.component.html',
  styleUrl: './matching.component.scss'
})
export class MatchingComponent {
  productList: any[] = [];

  constructor(private matchingService: MatchingService) {
  }

  getProducts(): void {
    this.matchingService.getProducts().subscribe((res: any) => {
      this.productList = res;
    })
  }
}
