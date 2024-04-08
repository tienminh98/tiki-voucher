import { Component } from '@angular/core';
import ActivateRoute from '../../../account/activate/activate.route';
import { ActivatedRoute } from '@angular/router';
import { MatchingService } from '../matching.service';
import { map, pluck, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzTabComponent, NzTabSetComponent } from 'ng-zorro-antd/tabs';
import {NzTooltipDirective} from "ng-zorro-antd/tooltip";

@Component({
  selector: 'jhi-item-detail',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzTabSetComponent,
    NzTabComponent,
    NzTooltipDirective
  ],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent {
  id!: number;
  data: any;
  isChecked = false;
  constructor(private route: ActivatedRoute, private matchingService: MatchingService) {
    route.params.pipe(pluck('id'),switchMap(id => this.matchingService.getDetailItem(Number(id)))).subscribe(res => {
      this.data = res;
    })
  }
}
