import { Component } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../../layouts/navigation/header-component/header-component';
import { MenuComponent } from '../../../../layouts/navigation/menu-component/menu-component';

@Component({
  selector: 'app-usuario-component',
  imports: [RouterModule, MatDrawerContainer, MatDrawer, MatDrawerContent, HeaderComponent, MenuComponent],
  templateUrl: './usuario-component.html',
  styleUrl: './usuario-component.css',
})
export class UsuarioComponent {

}
