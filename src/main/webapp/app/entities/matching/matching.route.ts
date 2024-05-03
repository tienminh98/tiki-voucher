import {Route, Routes} from '@angular/router';

import {MatchingComponent} from "./matching.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";

const matchingRoute: Routes = [
  {
    path: '',
    component: MatchingComponent,
    title: 'matching.title',
  },
  {
    path: 'detail',
    component: ItemDetailComponent,
    title: 'matching.detail.title',
  }
];

export default matchingRoute;
