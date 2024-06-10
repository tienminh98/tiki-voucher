import { Component, TemplateRef, ViewChild } from '@angular/core';
import {NzIconDirective} from "ng-zorro-antd/icon";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { VoucherService } from './voucher.service';
import { NzNotificationComponent, NzNotificationService } from 'ng-zorro-antd/notification';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'jhi-voucher',
  standalone: true,
  imports: [
    NzIconDirective,
    RouterLink,
    NzButtonComponent
  ],
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.scss'
})
export class VoucherComponent {
  @ViewChild('notificationBtnTpl', { static: true }) btnTemplate!: TemplateRef<{ $implicit: NzNotificationComponent }>;
  id = '';
  hostBase = 'https\://lyst686.com/admin/storage/app/public/';
  voucherListFake: any[] = [
    {
      img: 'content/images/voucher1.jpg',
      title: 'Đồng hồ thông minh Apple Watch Ultra 2 GPS + Cellular 49mm viền Titanium dây Ocean',
      price: '21.990.000 ₫',
      discount: 0
    },
    {
      img: 'content/images/voucher-2.jpg',
      title: 'Điện thoại iPhone 15 Plus 512GB',
      price: '31.990.000 ₫',
      discount: 5
    },
    {
      img: 'content/images/voucher-3.jpg',
      title: 'Laptop Apple MacBook Air 15 inch M2 16GB/256GB (Z18T)',
      price: '66.990.000 ₫',
      discount: 0
    },
    {
      img: 'content/images/voucher-4.jpg',
      title: 'Điện thoại iPhone 15 Pro Max 1TB',
      price: '44.990.000 ₫',
      discount: 5
    },
    {
      img: 'content/images/voucher-5.jpg',
      title: 'Máy ảnh CANON EOS C100 DAF',
      price: '61.990.000 ₫',
      discount: 10
    },
    {
      img: 'content/images/voucher-6.jpg',
      title: 'Laptop gaming ROG G703 88tr630',
      price: '81.990.000 ₫',
      discount: 20
    },
    {
      img: 'content/images/voucher-7.jpg',
      title: 'Điện thoại màn hình gập LG Gram Fold',
      price: '33.990.000 ₫',
      discount: 10
    },
    {
      img: 'content/images/voucher-8.jpg',
      title: 'Vertu signature-dragon-silver-1461565921',
      price: '138.990.000 ₫',
      discount: 15
    },
  ]
  voucherList = this.voucherListFake;

  constructor(private location: Location,private notification: NzNotificationService,
              private route: ActivatedRoute, private router: Router, private voucherService: VoucherService) {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      this.voucherService.getProducts(this.id).subscribe(res => {
        if (res.status === 200) {
          this.voucherList = res.body || this.voucherListFake;
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
        nzDuration: 5000000,
        nzPlacement: 'top',
        nzPauseOnHover: true,
        nzStyle: {
          textAlign: 'left'
        },
      }
    );
  }
}
