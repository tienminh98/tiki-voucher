import { Component } from '@angular/core';
import {NzButtonComponent} from "ng-zorro-antd/button";
import { StateStorageService } from '../../core/auth/state-storage.service';
import { AuthServerProvider } from '../../core/auth/auth-jwt.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../../login/login.service';

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
    {img: this.handleImg('ft1'), title: 'Shipping Address', url: '/address'},
    {img: this.handleImg('ft2'), title: 'Detailed Bills', url: '/detail-bills'},
    {img: this.handleImg('ft3'), title: 'Top-up Record', url: '/test'},
    {img: this.handleImg('ft4'), title: 'Withdraw Record', url: '/test'},
    {img: this.handleImg('ft5'), title: 'Payment Card', url: '/test'},
    {img: this.handleImg('ft6'), title: 'Rule', url: '/test'},
    {img: this.handleImg('ft7'), title: 'Platform Introduction', url: '/test'},
    {img: this.handleImg('ft8'), title: 'Language', url: '/test'},
    {img: this.handleImg('ft9'), title: 'Log out', url: null},
  ]

  constructor(
              private stateStorageService: StateStorageService,
              private authServerProvider: AuthServerProvider,
              private loginService: LoginService,
              private router: Router,

  ) {
    this.account = stateStorageService.getUser();
  }

  handleImg(name: string): string {
    return `content/images/${name}.png`
  }

  handleAction(item: any): void {
    switch (item.title) {
      case 'Log out':
        this.loginService.logout();
        break;
      default:
        this.router.navigate(['my' + item.url]).then();
        break;
    }
  }
}
