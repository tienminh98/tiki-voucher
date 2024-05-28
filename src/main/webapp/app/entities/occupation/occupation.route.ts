import { Routes } from '@angular/router';

import {OccupationComponent} from "./occupation.component";
import {DetailComponent} from "./detail/detail.component";

const occupationRoute: Routes = [{
  path: '',
  component: OccupationComponent,
  title: 'occupation.title',
},
  {
    path: 'detail',
    component: DetailComponent,
    title: 'my.address.title'
  },
];

export default occupationRoute;
