import { Component, inject } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DigitosDirective } from '../../../../core/share/directives/digitos-directive';
import { LongitudDirective } from '../../../../core/share/directives/longitud-directive';
import { AuthCredenciales2FARequest, AuthCredenciales2FAResponse } from '../../../../core/auth/models/auth-interface';
import { AuthService } from '../../../../core/auth/services/auth-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatAnchor, MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-login-segundofa-component',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    DigitosDirective,
    LongitudDirective,
    MatAnchor, 
    MatButtonModule
  ],
  templateUrl: './login-segundofa-component.html',
  styleUrl: './login-segundofa-component.css',
})
export class LoginSegundofaComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly authService = inject(AuthService);

  validarOtpForm = this.fb.group({
    otp: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.validarOtpForm.invalid) {
      this.validarOtpForm.markAllAsTouched();
      console.log('Formulario inválido. Revisa los campos.');
      return;
    }

    this.authService.validarCredenciales2FA(this.generaRequest()).subscribe({
      next: (response: AuthCredenciales2FAResponse) => {
        localStorage.setItem('2fa', 'true');
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl(returnUrl);
      },
      error: (error) => {
        console.error('Error en login:', error);
      },
      complete: () => {
        console.log('Petición de autenticación completada.');
      },
    });
  }

  generaRequest(): AuthCredenciales2FARequest {
    return {
      otp: this.validarOtpForm.controls.otp.value!,
      jti: this.authService.getJti()
    }
  }

  get otpControl() {
    return this.validarOtpForm.get('otp');
  }
}
