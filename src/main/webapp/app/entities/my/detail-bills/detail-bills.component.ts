import { Component } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { NgForOf } from '@angular/common';
import { DetailBillsService } from './detail-bills.service';

@Component({
  selector: 'jhi-detail-bills',
  standalone: true,
  imports: [
    NzTableComponent,
    NgForOf
  ],
  templateUrl: './detail-bills.component.html',
  styleUrl: './detail-bills.component.scss'
})
export class DetailBillsComponent {
  listOfData: any;

  constructor(private detailBillsService: DetailBillsService) {
    detailBillsService.getOrders().subscribe((res: any) => {
      if (res.status === 200) {
        this.listOfData = res.body.orders;
      }
    })
  }
}
