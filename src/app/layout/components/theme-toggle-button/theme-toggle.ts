import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'theme-toggle-button',
  templateUrl: './theme-toggle.html',
  imports: [CommonModule],
})
export class ThemeToggleButtonComponent {
  themeService: ThemeService = inject(ThemeService);
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleTheme();
    }
  }
}
