import { Component } from '@angular/core';
import { DashboardLayout } from '@shared/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [DashboardLayout],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'WYSIWYG';
}
