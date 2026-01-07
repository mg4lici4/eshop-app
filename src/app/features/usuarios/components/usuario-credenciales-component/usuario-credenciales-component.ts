import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioRegistroRequest } from '../../../../core/usuario/models/usuario-interface';
import { UsuarioService } from '../../../../core/usuario/services/usuario-service';

@Component({
  selector: 'app-usuario-credenciales-component',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './usuario-credenciales-component.html',
  styleUrl: './usuario-credenciales-component.css',
})
export class UsuarioCredencialesComponent implements OnInit {

  private idPersona!: string;
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly usuarioService: UsuarioService = inject(UsuarioService);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  registrarCredencialesForm = this.fb.group({
    contrasenia: ['', [Validators.required, Validators.minLength(6)]],
    confContrasenia: ['', Validators.required],
  }, { validators: this.passwordMatchValidator });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.idPersona = params.get('idPersona')!;
    });    
  }

  onSubmit(): void {
    if (this.registrarCredencialesForm.invalid) {
      this.registrarCredencialesForm.markAllAsTouched();
      return;
    }

    const request: UsuarioRegistroRequest = {
      ... this.registrarCredencialesForm.getRawValue(),
      idPersona: Number(this.idPersona),
      aplicativo: 'App'
    };

    this.usuarioService.registrar(request).subscribe({
          next: () => {
            this.router.navigate(['/usuario/credenciales/2fa', this.idPersona]);
          },
          error: (error) => {
            console.error('Error al registrar usuario:', error);
          },
        });
  }

  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('contrasenia')?.value;
    const confirmPassword = form.get('confContrasenia')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  get contrasenia() { return this.registrarCredencialesForm.get('contrasenia'); }
  get confContrasenia() { return this.registrarCredencialesForm.get('confContrasenia'); }
}
