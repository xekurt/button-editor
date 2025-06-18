import { Component, inject } from '@angular/core';
import { DashboardLayout } from './layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [DashboardLayout],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'WYSIWYG';
}
