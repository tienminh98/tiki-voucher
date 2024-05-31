import { Routes } from '@angular/router';

import {VoucherComponent} from "./voucher.component";

const voucherRoute: Routes = [{
  path: '',
  component: VoucherComponent,
  title: 'voucher.title',
}];

export default voucherRoute;
