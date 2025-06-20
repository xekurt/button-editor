import { Component } from '@angular/core';
import { DashboardLayout } from './layout/layout';

@Component({
  selector: 'app-root',
  imports: [DashboardLayout],
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'WYSIWYG';
}
