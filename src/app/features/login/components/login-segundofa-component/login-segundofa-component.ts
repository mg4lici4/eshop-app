import { Component, inject } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DigitosDirective } from '../../../../core/share/directives/digitos-directive';
import { LongitudDirective } from '../../../../core/share/directives/longitud-directive';
import { jwtDecode } from 'jwt-decode';
import { AuthCredenciales2FARequest, AuthCredenciales2FAResponse, TokenPayload } from '../../../../core/auth/models/auth-interface';
import { AuthService } from '../../../../core/auth/services/auth-service';

@Component({
  selector: 'app-login-segundofa-component',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule, 
    DigitosDirective,
    LongitudDirective
  ],
  templateUrl: './login-segundofa-component.html',
  styleUrl: './login-segundofa-component.css',
})
export class LoginSegundofaComponent {
  private readonly fb = inject(NonNullableFormBuilder);
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
      },
      error: (error) => {
        console.error('Error en login:', error);
      },
      complete: () => {
        console.log('Petición de autenticación completada.');
      },
    });
  }

  isTokenExpired(token: string): boolean {
    const payload:TokenPayload = jwtDecode<TokenPayload>(token);
    const now:number = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  }

  getJti(): string {
    const token:string | null = localStorage.getItem('token');
    let jti: string = '';
    if (token) {
      const payload:TokenPayload = jwtDecode<TokenPayload>(token);
      jti =  payload.jti;
    }
    return jti;
  }

  generaRequest(): AuthCredenciales2FARequest{
    return {
      otp : this.validarOtpForm.controls.otp.value!,
      jti : this.getJti()
    }
  }

  get otpControl() {
    return this.validarOtpForm.get('otp');
  }
}
