import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  NonNullableFormBuilder
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { LoginService } from 'app/login/login.service';
import { AccountService } from 'app/core/auth/account.service';
import {left} from "@popperjs/core";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzIconDirective} from "ng-zorro-antd/icon";
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'jhi-login',
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule, RouterModule, NzButtonComponent, NzColDirective, NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzInputDirective, NzRowDirective, NzInputGroupComponent, NzIconDirective],
  templateUrl: './login.component.html',
  styleUrl: '../home/home.component.scss',
})
export default class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('username', { static: false })
  username!: ElementRef;

  authenticationError = false;

/*  loginForm = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    rememberMe: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
  });*/
  isShowPassword = false;
  loginForm!: FormGroup;

  constructor(
    private accountService: AccountService,
    private loginService: LoginService,
    private router: Router,
    private fb: NonNullableFormBuilder,
    private notification: NzNotificationService
  ) {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // if already authenticated then navigate to home page
    this.accountService.identity(true).subscribe(() => {
      if (this.accountService.isAuthenticated()) {
        this.router.navigate(['']);
      }
    });
  }

  ngAfterViewInit(): void {
    // this.username.nativeElement.focus();
  }

  login(): void {
    this.loginService.login(this.loginForm.getRawValue()).subscribe({
      next: () => {
        this.authenticationError = false;
        if (!this.router.getCurrentNavigation()) {
          // There were no routing during login (eg from navigationToStoredUrl)
          this.router.navigate(['']);
        }
      },
      error: () => (this.authenticationError = true),
    });
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      // console.log('submit', this.loginForm.value);
      this.loginService.login(this.loginForm.getRawValue()).subscribe({
        next: () => {
          this.authenticationError = false;
          if (!this.router.getCurrentNavigation()) {
            // There were no routing during login (eg from navigationToStoredUrl)
            this.router.navigate(['']);
          }

          this.notification.create('success', 'Đăng nhập thành công', '', {
            nzStyle: {
              textAlign: 'left'
            },
          });
        },
        error: (err) => {
          this.authenticationError = true;
          this.processError(err);
        },
      });
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  private processError(response: HttpErrorResponse): void {
    const keyErrors = Object.keys(response.error);
    this.notification.create('error', response.error[keyErrors[0]], '', {
      nzStyle: {
        textAlign: 'left'
      },
    });
  }

  protected readonly left = left;
}
