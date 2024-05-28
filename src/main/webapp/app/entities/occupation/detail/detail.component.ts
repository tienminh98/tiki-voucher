import { Component } from '@angular/core';
import {NzIconDirective} from "ng-zorro-antd/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'jhi-detail',
  standalone: true,
  imports: [
    NzIconDirective,
    RouterLink
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

}
