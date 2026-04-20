import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../../core/auth/services/auth-service';
import { AuthCredencialesRequest, AuthCredencialesResponse } from '../../../../core/auth/models/auth-interface';
import { Router, RouterLink } from '@angular/router';
import { MatAnchor, MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-user-name',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    MatAnchor,
    MatButtonModule
],
  templateUrl: './user-name-component.html',
  styleUrls: ['./user-name-component.css'],
})
export class UserNameComponent {
  private readonly authService = inject(AuthService);
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly router = inject(Router);

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      console.log('Formulario inválido. Revisa los campos.');
      return;
    }

    const request: AuthCredencialesRequest = this.loginForm.getRawValue();

    this.authService.validarCredenciales(request).subscribe({
      next: (response: AuthCredencialesResponse) => {
        localStorage.setItem('token', response.datos);
        this.router.navigate(['/login/2fa']);
      },
      error: (error) => {
        console.error('Error en login:', error);
      },
      complete: () => {
        console.log('Petición de autenticación completada.');
      },
    });
  }

  get usernameControl() {
    return this.loginForm.get('username');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }
}