import { Component, inject } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DigitosDirective } from '../../../../core/share/directives/digitos-directive';
import { LongitudDirective } from '../../../../core/share/directives/longitud-directive';

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

  validarOtpForm = this.fb.group({
    otp: ['', Validators.required],
  });

  onSubmit(): void {

  }

  get otpControl() {
    return this.validarOtpForm.get('otp');
  }
}
