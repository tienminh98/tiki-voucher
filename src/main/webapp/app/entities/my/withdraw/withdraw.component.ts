import {Component} from '@angular/core';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzTableComponent} from 'ng-zorro-antd/table';
import {NzTagComponent} from 'ng-zorro-antd/tag';
import {DetailBillsService} from '../detail-bills/detail-bills.service';
import {finalize} from 'rxjs/operators';
import {DatePipe, DecimalPipe, Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'jhi-withdraw',
  standalone: true,
  imports: [
    NzIconDirective,
    NzTableComponent,
    NzTagComponent,
    DatePipe,
    DecimalPipe
  ],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.scss'
})
export class WithdrawComponent {
  listOfData: any;
  isLoading = true;

  constructor(private detailBillsService: DetailBillsService, private location: Location,
              private router: Router,) {
    detailBillsService.getWithdrawals().pipe(finalize(() => (this.isLoading = false))).subscribe((res: any) => {
      if (res.status === 200) {
        this.listOfData = res.body || [];
      }
    })
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  protected readonly Number = Number;
}
