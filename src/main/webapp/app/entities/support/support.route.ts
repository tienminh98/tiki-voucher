import { Routes } from '@angular/router';

import {SupportComponent} from "./support.component";

const supportRoute: Routes = [{
  path: '',
  component: SupportComponent,
  title: 'support.title',
}];

export default supportRoute;
