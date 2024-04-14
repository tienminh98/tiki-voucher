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
  title: 'My.title'
  },
  {
    path: 'address',
    component: AddressComponent,
    title: 'My.title'
  },
  {
    path: 'detail-bills',
    component: DetailBillsComponent,
    title: 'My.title'
  },
  {
    path: 'rule',
    component: RuleComponent,
    title: 'My.title'
  },
  {
    path: 'platform-intro',
    component: PlatformIntroComponent,
    title: 'My.title'
  },
  {
    path: 'deposit',
    component: DepositComponent,
    title: 'My.title'
  },
  {
    path: 'withdraw',
    component: WithdrawComponent,
    title: 'My.title'
  }
  ];

export default myRoute;
