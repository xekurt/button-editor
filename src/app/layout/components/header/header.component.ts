// src/app/components/header/header.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ThemeToggleButton } from '../../../components/theme-toggle-button/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeToggleButton],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
