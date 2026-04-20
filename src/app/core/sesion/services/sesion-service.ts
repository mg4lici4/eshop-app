import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { CerrarSesionRequest } from '../models/sesion-interface';
import { BaseResponseInterface } from '../../share/models/base-response-interface';
import { AuthService } from '../../auth/services/auth-service';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  private http: HttpClient = inject(HttpClient);
  private authService: AuthService = inject(AuthService);

  cerrar(): Observable<BaseResponseInterface<any>> {
    const cerrarSesionRequest: CerrarSesionRequest = {
      jti: this.authService.getJti()
    };
    return this.http.post<BaseResponseInterface<any>>(environment.endpoints.sesiones.cerrar, cerrarSesionRequest);
  }
}
