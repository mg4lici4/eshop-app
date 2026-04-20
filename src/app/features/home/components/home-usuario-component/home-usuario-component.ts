import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../../../layouts/navigation/header-component/header-component';
import { MenuComponent } from '../../../../layouts/navigation/menu-component/menu-component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-usuario-component',
  imports: [RouterOutlet, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, HeaderComponent, MenuComponent],
  templateUrl: './home-usuario-component.html',
  styleUrl: './home-usuario-component.css',
})
export class HomeUsuarioComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  onToggleDrawer(isOpen: boolean) {
    if (isOpen) {
      this.drawer.open();
    } else {
      this.drawer.close();
    }
  }
}
