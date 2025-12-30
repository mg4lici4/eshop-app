import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './layouts/navigation/header-component/header-component';
import { MenuComponent } from './layouts/navigation/menu-component/menu-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, HeaderComponent, MenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eshop');

  @ViewChild('drawer') drawer!: MatDrawer;

  onToggleDrawer(isOpen: boolean) {
    if (isOpen) {
      this.drawer.open();
    } else {
      this.drawer.close();
    }
  }
}
