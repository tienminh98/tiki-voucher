import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Login } from 'app/login/login.model';
import { ApplicationConfigService } from '../config/application-config.service';
import { StateStorageService } from './state-storage.service';
import { HOT_BASE } from '../../app.constants';

type JwtToken = {
  id_token: string;
};

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {
  hostBase = HOT_BASE;
  constructor(
    private http: HttpClient,
    private stateStorageService: StateStorageService,
    private applicationConfigService: ApplicationConfigService,
  ) {}

  getToken(): string {
    return this.stateStorageService.getAuthenticationToken() ?? '';
  }

  /*login(credentials: Login): Observable<void> {
    return this.http
      .post<JwtToken>(this.applicationConfigService.getEndpointFor('api/authenticate'), credentials)
      .pipe(map(response => this.authenticateSuccess(response, credentials.rememberMe)));
  }*/

  login(credentials: any): Observable<void> {
    return this.http
      .post<JwtToken>(this.hostBase +'/login', credentials)
      .pipe(map(response => this.authenticateSuccess(response, true)));
  }

  logout(): Observable<void> {
    return new Observable(observer => {
      this.stateStorageService.clearAuthenticationToken();
      observer.complete();
    });
  }

  authenticateSuccess(response: any, rememberMe: boolean): void {
    this.stateStorageService.storeAuthenticationToken(response.token, rememberMe);
  }
}
