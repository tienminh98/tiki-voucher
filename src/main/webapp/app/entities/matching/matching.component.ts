import { Component } from '@angular/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import { MatchingService } from './matching.service';
import {RouterLink} from "@angular/router";
import { HOT_BASE } from '../../app.constants';
import { StateStorageService } from '../../core/auth/state-storage.service';

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
  account!: any;
  hostBase = 'https\://lyst686.com/admin/storage/app/public/';
  productList: any[] = [];

  constructor(private matchingService: MatchingService, private stateStorageService: StateStorageService) {
    this.account = stateStorageService.getUser();
  }

  getProducts(): void {
    this.matchingService.getProducts().subscribe((res: any) => {
      if (res.status === 200) {
        this.productList = res.body;
      }
    })
  }
}
