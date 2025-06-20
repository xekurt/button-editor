import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  open = input<boolean>(false);
  closeSidebar = output();
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
  ];
  constructor(public router: Router) {}
  handleCloseButton() {
    this.closeSidebar.emit();
  }
}
