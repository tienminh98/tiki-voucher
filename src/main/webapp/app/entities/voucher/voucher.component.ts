import { Component, TemplateRef, ViewChild } from '@angular/core';
import {NzIconDirective} from "ng-zorro-antd/icon";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DecimalPipe, Location, NgIf } from '@angular/common';
import { VoucherService } from './voucher.service';
import { NzNotificationComponent, NzNotificationService } from 'ng-zorro-antd/notification';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { EventManager } from '../../core/util/event-manager.service';

@Component({
  selector: 'jhi-voucher',
  standalone: true,
  imports: [
    NzIconDirective,
    RouterLink,
    NzButtonComponent,
    NgIf,
    DecimalPipe
  ],
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.scss'
})
export class VoucherComponent {
  @ViewChild('notificationBtnTpl', { static: true }) btnTemplate!: TemplateRef<{ $implicit: NzNotificationComponent }>;
  id = '';
  hostBase = 'https\://www.tikievents.net/admin/storage/app/public/';
  voucherList: any[] = [];
  selectedItem: any;
  isShowSelectedItem = false;

  quantityList = [1, 2, 3, 5, 10, 20];
  selectedQuantity = 1;

  constructor(private eventManager: EventManager,private location: Location,private notification: NzNotificationService,
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

  handleAction(item: any): void {
    this.isShowSelectedItem = true;
    this.selectedItem = item;
    this.selectedItem['return_price'] = ((Number(this.selectedItem.commission) * Number(this.selectedItem.price)) / 100) || 0;
    this.selectedItem['welfare_price'] = Number(this.selectedItem.price) - this.selectedItem['return_price'];
    /*this.voucherService.order(id).subscribe(res => {
      console.log('res', res);
      if (res.status === 200) {
        this.notification.create(
          'success',
          res.body.message,
          '',
          {
            nzStyle: {
              textAlign: 'left'
            },
          }

        );
      }
    },err => {
      if (err.status === 400) {
        this.showConfirm(String(err.error.error));
      }
    })*/
  }

  showConfirm(message: string): void {
    /*this.modal.confirm({
      nzTitle: '<i>Your current account balance is insufficient for payment. Would you like to top up your balance?</i>',
      nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => console.log('OK')
    });*/
    this.notification.create(
      'warning',
      message,
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

  onOpenChatBox(): void {
    this.eventManager.broadcast('open-chat');
  }

  handleCloseSelectedItem(): void {
    this.isShowSelectedItem = false;
    this.selectedQuantity = 1;
    this.selectedItem = null;
  }



  protected readonly Number = Number;
}
