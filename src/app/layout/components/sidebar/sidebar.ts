import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  @Input() open = false;
  sidebarLinks = [
    {
      label: 'Playground',
      route: '/playground',
      aria: 'Playground',
    },
    {
      label: 'Documentation',
      route: '/documentation',
      aria: 'Documentation',
    },
    {
      label: 'For Daniel',
      route: '/for-daniel',
      aria: 'for daniel',
    },
  ];
  constructor(public router: Router) {}
  closeSidebar() {
    this.open = false;
  }
}
