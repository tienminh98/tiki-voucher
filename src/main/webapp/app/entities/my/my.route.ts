import { Routes } from '@angular/router';
import { MyComponent } from './my.component';
import { AddressComponent } from './address/address.component';
import { DetailBillsComponent } from './detail-bills/detail-bills.component';
import { RuleComponent } from './rule/rule.component';
import { PlatformIntroComponent } from './platform-intro/platform-intro.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const myRoute: Routes = [
  {
  path: '',
  component: MyComponent,
  title: 'my.title'
  },
  {
    path: 'address',
    component: AddressComponent,
    title: 'my.address.title'
  },
  {
    path: 'detail-bills',
    component: DetailBillsComponent,
    title: 'my.detailBills.title'
  },
  {
    path: 'rule',
    component: RuleComponent,
    title: 'my.rule.title'
  },
  {
    path: 'platform-intro',
    component: PlatformIntroComponent,
    title: 'my.platformIntro.title'
  },
  {
    path: 'deposit',
    component: DepositComponent,
    title: 'my.deposit.title'
  },
  {
    path: 'withdraw',
    component: WithdrawComponent,
    title: 'my.withdraw.title'
  }
  ];

export default myRoute;
