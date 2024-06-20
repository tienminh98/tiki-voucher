import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Account } from 'app/core/auth/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { AuthServerProvider } from 'app/core/auth/auth-jwt.service';
import { Login } from './login.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(
    private accountService: AccountService,
    private authServerProvider: AuthServerProvider,
    private router: Router,
  ) {}

  login(credentials: Login): Observable<Account | null> {
    return this.authServerProvider.login(credentials).pipe(mergeMap(() => this.accountService.identity(true)));
  }

 /* logout(): void {
    this.authServerProvider.logout().subscribe({ complete: () => {
        console.log('hello');
        this.accountService.authenticate(null);
        this.router.navigateByUrl('/login').then();
      } });
  }*/

  logout(): Observable<any> {
    return this.authServerProvider.logout();
  }
}
