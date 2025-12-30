import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthCredencialesRequest, AuthCredencialesResponse } from '../models/auth-interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http: HttpClient = inject(HttpClient);

  validarCredenciales(authCredencialesRequest: AuthCredencialesRequest): Observable<AuthCredencialesResponse> {
    return this.http.post<AuthCredencialesResponse>(environment.endpoints.login, authCredencialesRequest);
  }
}

