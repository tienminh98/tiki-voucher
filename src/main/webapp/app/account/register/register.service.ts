import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { Registration } from './register.model';
import { HOT_BASE } from '../../app.constants';
import { map } from 'rxjs/operators';
import { AuthServerProvider } from '../../core/auth/auth-jwt.service';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  hostBase = HOT_BASE;
  constructor(
    private http: HttpClient,
    private authServerProvider: AuthServerProvider,

  ) {}

  save(registration: any): Observable<any> {
    return this.http.post(this.hostBase + '/register', registration).pipe(map(response => this.authServerProvider.authenticateSuccess(response, true)));
    ;
  }
}
