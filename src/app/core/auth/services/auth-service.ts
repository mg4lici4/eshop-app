import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthCredenciales2FARequest, AuthCredenciales2FAResponse, AuthCredencialesRequest, AuthCredencialesResponse } from '../models/auth-interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http: HttpClient = inject(HttpClient);

  validarCredenciales(authCredencialesRequest: AuthCredencialesRequest): Observable<AuthCredencialesResponse> {
    return this.http.post<AuthCredencialesResponse>(environment.endpoints.login.username, authCredencialesRequest);
  }

  validarCredenciales2FA(authCredenciales2FARequest: AuthCredenciales2FARequest): Observable<AuthCredenciales2FAResponse> {
    return this.http.post<AuthCredenciales2FAResponse>(environment.endpoints.login.segundofa, authCredenciales2FARequest);
  }
}

