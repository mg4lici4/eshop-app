import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UsuarioGenerarSecretoRequest, UsuarioGenerarSecretoResponse } from '../models/usuario-interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private http: HttpClient = inject(HttpClient);

  obtenerSecreto(usuarioGenerarSecretoRequest: UsuarioGenerarSecretoRequest): Observable<UsuarioGenerarSecretoResponse> {
    return this.http.post<UsuarioGenerarSecretoResponse>(environment.endpoints.usuarios.secreto, usuarioGenerarSecretoRequest);
  }
}
