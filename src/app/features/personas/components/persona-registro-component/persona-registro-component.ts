import { Component, inject } from '@angular/core';
import { Validators, FormsModule, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PersonaService } from '../../../../core/persona/services/persona-service';
import { PersonaRegistroRequest, PersonaRegistroResponse } from '../../../../core/persona/models/persona-interface';

@Component({
  selector: 'app-persona-registro',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './persona-registro-component.html',
  styleUrls: ['./persona-registro-component.css'],
})
export class PersonaRegistroComponent {
  private readonly personaService = inject(PersonaService);
  private readonly fb = inject(NonNullableFormBuilder);

  // ✅ Form tipado y más limpio
  registrarPersonaForm = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    celular: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.registrarPersonaForm.invalid) {
      this.registrarPersonaForm.markAllAsTouched();
      return;
    }

    const request: PersonaRegistroRequest = this.registrarPersonaForm.getRawValue();

    this.personaService.registrar(request).subscribe({
      next: (response: PersonaRegistroResponse) => {
        console.log('Registro exitoso:', response);
        // Aquí podrías mostrar un snackbar o redirigir
      },
      error: (error) => {
        console.error('Error al registrar persona:', error);
      },
    });
  }

  get nombre() { return this.registrarPersonaForm.get('nombre'); }
  get apellidos() { return this.registrarPersonaForm.get('apellidos'); }
  get correo() { return this.registrarPersonaForm.get('correo'); }
  get celular() { return this.registrarPersonaForm.get('celular'); }
}