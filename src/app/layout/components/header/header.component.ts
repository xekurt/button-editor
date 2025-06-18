// src/app/components/header/header.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeToggleButtonComponent } from '../theme-toggle-button/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeToggleButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
}
