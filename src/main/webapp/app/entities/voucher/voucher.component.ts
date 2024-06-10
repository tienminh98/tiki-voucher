import { Component, TemplateRef, ViewChild } from '@angular/core';
import {NzIconDirective} from "ng-zorro-antd/icon";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Location, NgIf } from '@angular/common';
import { VoucherService } from './voucher.service';
import { NzNotificationComponent, NzNotificationService } from 'ng-zorro-antd/notification';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'jhi-voucher',
  standalone: true,
  imports: [
    NzIconDirective,
    RouterLink,
    NzButtonComponent,
    NgIf
  ],
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.scss'
})
export class VoucherComponent {
  @ViewChild('notificationBtnTpl', { static: true }) btnTemplate!: TemplateRef<{ $implicit: NzNotificationComponent }>;
  id = '';
  hostBase = 'https\://www.tikievents.net/admin/storage/app/public/';
  voucherList: any[] = [];

  constructor(private location: Location,private notification: NzNotificationService,
              private route: ActivatedRoute, private router: Router, private voucherService: VoucherService) {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      this.voucherService.getProducts(this.id).subscribe(res => {
        if (res.status === 200) {
          this.voucherList = res.body;
        }
      })
    })
  }
  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  handleAction(id: string): void {
    this.voucherService.order(id).subscribe(res => {
      console.log('res', res);
    },err => {
      console.log('err', err);
      if (err.status === 400) {
        this.showConfirm();
      }
    })
  }

  showConfirm(): void {
    /*this.modal.confirm({
      nzTitle: '<i>Your current account balance is insufficient for payment. Would you like to top up your balance?</i>',
      nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => console.log('OK')
    });*/
    this.notification.create(
      'warning',
      'Your current account balance is insufficient for payment. Would you like to top up your balance?',
      '',
      {
        nzButton: this.btnTemplate,
        nzDuration: 5000,
        nzPlacement: 'top',
        nzPauseOnHover: true,
        nzStyle: {
          textAlign: 'left'
        },
      }
    );
  }

  protected readonly Number = Number;
}
