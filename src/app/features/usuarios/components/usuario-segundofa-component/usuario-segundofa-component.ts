import { Component, inject, OnInit, signal } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { UsuarioService } from '../../../../core/usuario/services/usuario-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DigitosDirective } from '../../../../core/share/directives/digitos-directive';
import { UsuarioSegundoFaActivarRequest, UsuarioSegundoFaActivarResponse } from '../../../../core/usuario/models/usuario-interface';


@Component({
  selector: 'app-usuario-generar-secreto-component',
  imports: [
    QRCodeComponent,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    DigitosDirective],
  templateUrl: './usuario-segundofa-component.html',
  styleUrl: './usuario-segundofa-component.css',
})
export class UsuarioSegundoFAComponent implements OnInit {


  otpauthUri = signal<string | null>(null);

  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly usuarioService: UsuarioService = inject(UsuarioService);
  private readonly router = inject(Router);
  private readonly fb = inject(NonNullableFormBuilder);
  private idPersona!: string;
  private idUsuario!: number;

  registrarOtpForm = this.fb.group({
    otp: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^[0-9]*$/)]]
  });

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.idPersona = params.get('idPersona')!;
    });

    this.usuarioService.segundoFa({ idPersona: Number(this.idPersona) }).subscribe({
      next: resp => {
        this.otpauthUri.set(resp.datos.otpauthUri);
        this.idUsuario = resp.datos.idUsuario;
      },
      error: err => console.error(err)
    });
  }

  onSubmit() {
    if (this.registrarOtpForm.invalid) {
      this.registrarOtpForm.markAllAsTouched();
      return;
    }

    const request: UsuarioSegundoFaActivarRequest = {
      ...this.registrarOtpForm.getRawValue(),
      idUsuario: Number(this.idUsuario)
    };
    this.usuarioService.activarSegundoFa(request).subscribe({
      next: (response: UsuarioSegundoFaActivarResponse) => {
        console.log('Segundo factor de autenticación activado:', response);
      },
      error: (error) => {
        console.error('Error al activar segundo factor de autenticación.', error);
      },
      complete: () => {
        console.log('Petición de autenticación completada.');
      },
    });
  }

  get otp() { return this.registrarOtpForm.get('otp'); }
}
