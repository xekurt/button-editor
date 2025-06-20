import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeToggleButtonComponent } from '../theme-toggle-button/theme-toggle';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeToggleButtonComponent],
  templateUrl: './header.html',
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
}
