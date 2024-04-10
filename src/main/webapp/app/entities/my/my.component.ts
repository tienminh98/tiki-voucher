import { Component } from '@angular/core';
import {NzButtonComponent} from "ng-zorro-antd/button";
import { StateStorageService } from '../../core/auth/state-storage.service';

@Component({
  selector: 'jhi-my',
  standalone: true,
  imports: [
    NzButtonComponent
  ],
  templateUrl: './my.component.html',
  styleUrl: './my.component.scss'
})
export class MyComponent {
  account: any;

  featureList: any[] = [
    {img: this.handleImg('ft1'), title: 'Shipping Address'},
    {img: this.handleImg('ft2'), title: 'Detailed Bills'},
    {img: this.handleImg('ft3'), title: 'Top-up Record'},
    {img: this.handleImg('ft4'), title: 'Withdraw Record'},
    {img: this.handleImg('ft5'), title: 'Payment Card'},
    {img: this.handleImg('ft6'), title: 'Rule'},
    {img: this.handleImg('ft7'), title: 'Platform Introduction'},
    {img: this.handleImg('ft8'), title: 'Language'},
    {img: this.handleImg('ft9'), title: 'Log out'},
  ]

  constructor(private stateStorageService: StateStorageService) {
    this.account = stateStorageService.getUser();
  }

  handleImg(name: string): string {
    return `content/images/${name}.png`
  }
}
