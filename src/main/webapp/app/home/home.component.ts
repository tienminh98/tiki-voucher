import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NzButtonComponent, NzButtonSize} from 'ng-zorro-antd/button';


@Component({
  standalone: true,
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [SharedModule, RouterModule, NgOptimizedImage, ReactiveFormsModule, NzButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  size: NzButtonSize = 'large';

  private readonly destroy$ = new Subject<void>();

  commodityList: any[] = [];
  memberList: any[] = [];
  memberImageList: any[] = [];
  annList: any[] = [];

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {
    this.commodityList = this.fakeArray(12).map((_, index) => `content/images/g${index+1}.jpg`);
    this.memberImageList = this.fakeArray(9).map((_, index) => `content/images/h${index+1}.jpg`);
    this.memberList = this.fakeArray(8).map((_, index) => ({
      bgImg: `content/images/m${this.randomBetween1And4()}.jpg`,
      title: 'SAKS OFF 5TH',
      reqInvest: 300,
      type: `VIP${index}`,
      val: 0.3,
      order: 30,
    }));
    this.annList = this.fakeArray(20).map((_, index) => ({
      cardNumber: '[****2512]',
      money: 2512201,
    }));
  }

  randomBetween1And4() {
    return Math.floor(Math.random() * 4) + 1;
  }

  fakeArray(length: number): any[] {
    return new Array(length).fill(null);
  }

  ngOnInit(): void {
    this.accountService
      .getAuthenticationState()
      .pipe(takeUntil(this.destroy$))
      .subscribe(account => (this.account = account));
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
