import { Component, inject } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login-segundofa-component',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
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
