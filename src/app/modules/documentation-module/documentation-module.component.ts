import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonListComponent } from './components/button-list/button-list.component';
import { DescriptionComponent } from './components/description/description.component';

@Component({
  selector: 'app-documentation-module',
  imports: [CommonModule, ButtonListComponent, DescriptionComponent],
  templateUrl: './documentation-module.component.html',
})
export class DocumentationModule {}
