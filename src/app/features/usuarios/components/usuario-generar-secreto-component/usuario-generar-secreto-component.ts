import { Component, inject, OnInit, signal } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { UsuarioService } from '../../../../core/usuario/services/usuario-service';


@Component({
  selector: 'app-usuario-generar-secreto-component',
  imports: [QRCodeComponent],
  templateUrl: './usuario-generar-secreto-component.html',
  styleUrl: './usuario-generar-secreto-component.css',
})
export class UsuarioGenerarSecretoComponent implements OnInit {


  otpauthUri = signal<string | null>(null);
  usuarioService: UsuarioService = inject(UsuarioService);

  ngOnInit() {
    this.usuarioService.obtenerSecreto({ idPersona: 2 }).subscribe({
      next: resp => this.otpauthUri.set(resp.datos),
      error: err => console.error(err)
    });
  }
}
