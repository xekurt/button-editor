// src/app/components/header/header.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  themeService: ThemeService = inject(ThemeService);
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
