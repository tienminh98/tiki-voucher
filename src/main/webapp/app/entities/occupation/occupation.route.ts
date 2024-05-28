import { Routes } from '@angular/router';

import {OccupationComponent} from "./occupation.component";

const occupationRoute: Routes = [{
  path: '',
  component: OccupationComponent,
  title: 'occupation.title',
}];

export default occupationRoute;
