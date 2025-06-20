import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { SidebarComponent } from './components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, RouterOutlet],
  templateUrl: './layout.html',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DashboardLayout {
  sidebarOpen = false;
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
