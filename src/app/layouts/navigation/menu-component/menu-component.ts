import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [MatNavList, MatListItem, MatIcon, RouterLink],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent {
  menuItems = [
    { label: 'Inicio', route: '/home', icon: 'home' },
    { label: 'Personas', route: '/personas', icon: 'people' },
    { label: 'Configuración', route: '/settings', icon: 'settings' }
  ];
}
