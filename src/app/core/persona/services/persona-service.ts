import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PersonaRegistroRequest, PersonaRegistroResponse } from '../models/persona-interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private http: HttpClient = inject(HttpClient);

  registrar(personaRegistroRequest: PersonaRegistroRequest): Observable<PersonaRegistroResponse> {
    return this.http.post<PersonaRegistroResponse>(environment.endpoints.personas.registro, personaRegistroRequest);
  }
}
