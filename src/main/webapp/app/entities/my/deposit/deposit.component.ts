import { Component } from '@angular/core';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { DetailBillsService } from '../detail-bills/detail-bills.service';
import { finalize } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'jhi-deposit',
  standalone: true,
  imports: [
    NzIconDirective,
    NzTableComponent,
    NzTagComponent,
    DatePipe
  ],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss'
})
export class DepositComponent {
  listOfData: any;
  isLoading = true;

  constructor(private detailBillsService: DetailBillsService) {
    detailBillsService.getDeposits().pipe(finalize(() => (this.isLoading = false))).subscribe((res: any) => {
      console.log('res', res);
      if (res.status === 200) {
        this.listOfData = res.body || [];
      }
    })
  }
}
