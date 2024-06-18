import { Routes } from '@angular/router';

import {WithdrawComponent} from "./withdraw.component";

const withdrawHistoryRoute: Routes = [{
  path: '',
  component: WithdrawComponent,
  title: 'withdraw.title',
}];

export default withdrawHistoryRoute;
