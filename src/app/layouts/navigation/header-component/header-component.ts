import { Component, EventEmitter, Output, Renderer2, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.css'],
})
export class HeaderComponent {
  private readonly renderer = inject(Renderer2);
  private mode: ColorScheme = ColorScheme.Light;
  private isOpen = false;

  @Output() readonly toggleDrawer = new EventEmitter<boolean>();

  toggleDrawerMenu(): void {
    this.isOpen = !this.isOpen;
    this.toggleDrawer.emit(this.isOpen);
  }

  toggleDarkMode(): void {
    this.mode = this.mode === ColorScheme.Dark ? ColorScheme.Light : ColorScheme.Dark;

    this.renderer.setStyle(
      document.documentElement,
      'color-scheme',
      this.mode
    );
  }
}

export enum ColorScheme {
  Dark = 'dark',
  Light = 'light'
}