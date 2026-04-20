import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthCredenciales2FARequest, AuthCredenciales2FAResponse, AuthCredencialesRequest, AuthCredencialesResponse, TokenPayload } from '../models/auth-interface';
import { environment } from '../../../../environments/environment';
import { jwtDecode } from 'jwt-decode';

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

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    if (this.isTokenExpired(token)) {
      localStorage.removeItem('token');
      localStorage.removeItem('2fa');
      return false;
    }

    return true;
  }

  isTokenExpired(token: string): boolean {
    const payload: TokenPayload = jwtDecode<TokenPayload>(token);
    const now: number = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  }

  getJti(): string {
    const token: string | null = localStorage.getItem('token');
    let jti: string = '';
    if (token) {
      const payload: TokenPayload = jwtDecode<TokenPayload>(token);
      jti = payload.jti;
    }
    return jti;
  }
}

