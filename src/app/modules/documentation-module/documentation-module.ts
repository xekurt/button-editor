import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonListComponent } from './components/button-list/button-list';
import { DescriptionComponent } from './components/description/description';

@Component({
  selector: 'app-documentation-module',
  imports: [CommonModule, ButtonListComponent, DescriptionComponent],
  templateUrl: './documentation-module.html',
})
export class DocumentationModule {}
