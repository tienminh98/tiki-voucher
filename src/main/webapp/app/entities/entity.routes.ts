
import { Routes } from '@angular/router';
import matchingRoute from "./matching/matching.route";
import supportRoute from "./support/support.route";
import myRoute from "./my/my.route";

const routes: Routes = [
  {
    path: 'matching',
    loadChildren: () => import(`../entities/matching/matching.route`),
  },
  {
    path: 'support',
    loadChildren: () => import(`../entities/support/support.route`),
  },
  {
    path: 'my',
    loadChildren: () => import(`../entities/my/my.route`),
  },
  {
    path: 'record',
    loadChildren: () => import(`../entities/records/records.route`),
  },
  {
    path: 'occupation',
    loadChildren: () => import(`../entities/occupation/occupation.route`),
  }
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
