import { Component, EventEmitter, OnInit, Output, Renderer2, inject } from '@angular/core';
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
export class HeaderComponent implements OnInit {

  private readonly renderer = inject(Renderer2);
  private isOpen = false;

  @Output() readonly toggleDrawer = new EventEmitter<boolean>();
  mode: ColorScheme = ColorScheme.Light;

  ngOnInit(): void {
    const storedMode = localStorage.getItem('color-scheme') as ColorScheme | null;
    this.mode = storedMode ?? ColorScheme.Light;
    this.renderColor();
  }

  toggleDrawerMenu(): void {
    this.isOpen = !this.isOpen;
    this.toggleDrawer.emit(this.isOpen);
  }

  toggleDarkMode(): void {
    this.mode = this.mode === ColorScheme.Dark ? ColorScheme.Light : ColorScheme.Dark;
    this.renderColor();

    localStorage.setItem('color-scheme', this.mode);
  }

  renderColor(){
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