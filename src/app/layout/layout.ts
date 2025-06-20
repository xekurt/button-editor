import { Component, signal } from '@angular/core';
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
  sidebarOpen = signal<boolean>(false);
  toggleSidebar() {
    this.sidebarOpen.update((currentState) => !currentState);
  }
  closeSidebar() {
    this.sidebarOpen.set(false);
  }
}
