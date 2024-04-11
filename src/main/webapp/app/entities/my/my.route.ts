import { Routes } from '@angular/router';
import { MyComponent } from './my.component';
import { AddressComponent } from './address/address.component';
import { DetailBillsComponent } from './detail-bills/detail-bills.component';

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
  }
  ];

export default myRoute;
