import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonListComponent } from './button-list/button-list.component';

@Component({
  selector: 'app-documentation-module',
  imports: [CommonModule, ButtonListComponent],
  templateUrl: './documentation-module.component.html',
  styleUrl: './documentation-module.component.css',
})
export class DocumentationModule {}
