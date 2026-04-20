import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { Router, RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogoConfimacionComponent } from '../../../core/share/components/dialogo-confimacion-component/dialogo-confimacion-component';
import { SesionService } from '../../../core/sesion/services/sesion-service';

@Component({
  selector: 'app-menu',
  imports: [MatNavList, MatListItem, MatIcon, RouterLink,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent {
  private dialog = inject(MatDialog);
  private sesionService = inject(SesionService);
  private router = inject(Router);
  menuItems = [
    { label: 'Inicio', route: '/home', icon: 'home' },
    { label: 'Personas', route: '/personas', icon: 'people' },
    { label: 'Configuración', route: '/settings', icon: 'settings' }
  ];

  cerrarSesion() {

    const dialogRef = this.dialog.open(DialogoConfimacionComponent, {
      data: {
        title: 'Cerrar sesión',
        message: '¿Deseas cerrar la sesión?'
      }
    });

    dialogRef.afterClosed().subscribe(confirmado => {
      if (confirmado) {
        this.logout();
      }
    });
  }

  logout() {
    this.sesionService.cerrar().subscribe({
      next: () => this.finishLogout(),
      error: () => this.finishLogout() // incluso si falla API
    });
  }

  private finishLogout() {
    this.clearSesion();
    this.router.navigate(['/login/username']);
  }

  clearSesion(){
    localStorage.removeItem('token');
      localStorage.removeItem('2fa');
  }
}
