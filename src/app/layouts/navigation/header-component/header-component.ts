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
  private isOpen = false;

  @Output() readonly toggleDrawer = new EventEmitter<boolean>();

  mode: 'dark_mode' | 'light_mode' = 'dark_mode';

  toggleDrawerMenu(): void {
    this.isOpen = !this.isOpen;
    this.toggleDrawer.emit(this.isOpen);
  }

  toggleDarkMode(): void {
    const isDark = this.mode === 'dark_mode';
    const newMode = isDark ? 'light_mode' : 'dark_mode';

    this.mode = newMode;

    if (newMode === 'dark_mode') {
      this.renderer.addClass(document.documentElement, 'dark-theme');
      this.renderer.removeClass(document.documentElement, 'light-theme');
    } else {
      this.renderer.addClass(document.documentElement, 'light-theme');
      this.renderer.removeClass(document.documentElement, 'dark-theme');
    }
  }
}