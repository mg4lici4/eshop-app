import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UsuarioGenerarSecretoRequest, UsuarioGenerarSecretoResponse, UsuarioRegistroRequest, UsuarioRegistroResponse, UsuarioSegundoFaActivarRequest, UsuarioSegundoFaActivarResponse } from '../models/usuario-interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private http: HttpClient = inject(HttpClient);
  private usuariosProperty = environment.endpoints.usuarios;

  registrar(usuarioRegistroRequest: UsuarioRegistroRequest): Observable<UsuarioRegistroResponse> {
    return this.http.post<UsuarioRegistroResponse>(this.usuariosProperty.registrar, usuarioRegistroRequest);
  }

  segundoFa(usuarioGenerarSecretoRequest: UsuarioGenerarSecretoRequest): Observable<UsuarioGenerarSecretoResponse> {
    return this.http.post<UsuarioGenerarSecretoResponse>(this.usuariosProperty.segundofa.generar, usuarioGenerarSecretoRequest);
  }

  activarSegundoFa(usuarioSegundoFaActivarRequest: UsuarioSegundoFaActivarRequest): Observable<UsuarioSegundoFaActivarResponse> {
    return this.http.post<UsuarioSegundoFaActivarResponse>(this.usuariosProperty.segundofa.activar, usuarioSegundoFaActivarRequest);
  }
}
