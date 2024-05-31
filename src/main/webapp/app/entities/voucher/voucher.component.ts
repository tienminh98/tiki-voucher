import { Component } from '@angular/core';
import {NzIconDirective} from "ng-zorro-antd/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'jhi-voucher',
  standalone: true,
  imports: [
    NzIconDirective,
    RouterLink
  ],
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.scss'
})
export class VoucherComponent {
  voucherList: any[] = [
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
  constructor() {
  }
}
