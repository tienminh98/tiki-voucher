import { Component } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { NgForOf } from '@angular/common';
import { DetailBillsService } from './detail-bills.service';
import { finalize } from 'rxjs/operators';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'jhi-detail-bills',
  standalone: true,
  imports: [
    NzTableComponent,
    NgForOf,
    NzTagComponent,
    NzIconDirective
  ],
  templateUrl: './detail-bills.component.html',
  styleUrl: './detail-bills.component.scss'
})
export class DetailBillsComponent {
  listOfData: any;
  isLoading = true;

  constructor(private detailBillsService: DetailBillsService) {
    detailBillsService.getOrders().pipe(finalize(() => (this.isLoading = false))).subscribe((res: any) => {
      if (res.status === 200) {
        this.listOfData = res.body.orders || [];
      }
    })
  }
}
