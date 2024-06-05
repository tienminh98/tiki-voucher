import { Component } from '@angular/core';
import {NzIconDirective} from "ng-zorro-antd/icon";
import {RouterLink} from "@angular/router";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent} from "ng-zorro-antd/form";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'jhi-withdraw',
  standalone: true,
  imports: [
    NzIconDirective,
    RouterLink,
    NzButtonComponent,
    NzColDirective,
    NzFormControlComponent,
    NzFormDirective,
    NzFormItemComponent,
    NzInputDirective,
    NzInputGroupComponent,
    NzRowDirective,
    ReactiveFormsModule
  ],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.scss'
})
export class WithdrawComponent {

}
