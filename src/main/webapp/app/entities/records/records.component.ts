import { Component } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { NzCollapseComponent, NzCollapsePanelComponent } from 'ng-zorro-antd/collapse';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { DetailBillsService } from '../my/detail-bills/detail-bills.service';
import { finalize } from 'rxjs/operators';
import { NzTabComponent, NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'jhi-records',
  standalone: true,
  imports: [
    NgClass,
    NzCollapseComponent,
    NzCollapsePanelComponent,
    DatePipe,
    NzTableComponent,
    NzTagComponent,
    NzTabComponent,
    NzTabSetComponent,
    NzIconDirective
  ],
  templateUrl: './records.component.html',
  styleUrl: './records.component.scss'
})
export class RecordsComponent {
  listOfData: any;
  baseData: any;
  isLoading = true;

  constructor(private detailBillsService: DetailBillsService) {
    detailBillsService.getOrders().pipe(finalize(() => (this.isLoading = false))).subscribe((res: any) => {
      if (res.status === 200) {
        this.baseData = res.body.orders || [];
        this.handleData(1);
      }
    })
  }

  handleData(status: number): void {
    this.listOfData = this.baseData.filter((item: { status: number; }) => item.status === status);
  }
}
