import { Routes } from '@angular/router';
import {WithdrawComponent} from "./withdraw.component";

const withdrawRoute: Routes = [{
  path: '',
  component: WithdrawComponent,
  title: 'withdraw.title'
}
];

export default withdrawRoute;
