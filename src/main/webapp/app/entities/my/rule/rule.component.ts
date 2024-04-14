import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCollapseComponent, NzCollapsePanelComponent } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'jhi-rule',
  standalone: true,
  imports: [
    NgClass,
    NzButtonComponent,
    NzCollapseComponent,
    NzCollapsePanelComponent
  ],
  templateUrl: './rule.component.html',
  styleUrl: './rule.component.scss'
})
export class RuleComponent {

}
