import { Component } from '@angular/core';
import {DatePipe, DecimalPipe, Location, NgClass, NgIf} from '@angular/common';
import { NzCollapseComponent, NzCollapsePanelComponent } from 'ng-zorro-antd/collapse';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { DetailBillsService } from '../my/detail-bills/detail-bills.service';
import { finalize } from 'rxjs/operators';
import { NzTabComponent, NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzInputDirective} from "ng-zorro-antd/input";
import {Router} from "@angular/router";

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
    NzIconDirective,
    FormsModule,
    NgIf,
    NzButtonComponent,
    NzColDirective,
    NzFormControlComponent,
    NzFormDirective,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzInputDirective,
    NzRowDirective,
    ReactiveFormsModule,
    DecimalPipe
  ],
  templateUrl: './records.component.html',
  styleUrl: './records.component.scss'
})
export class RecordsComponent {
  listOfData: any;
  isLoading = true;

  constructor(private detailBillsService: DetailBillsService, private location: Location, private router: Router) {
    detailBillsService.getOrders().pipe(finalize(() => (this.isLoading = false))).subscribe((res: any) => {
      if (res.status === 200) {
        console.log('res', res);
        this.listOfData = res.body.orders || [];
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
