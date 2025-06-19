import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonDropdownComponent } from '@components/button-dropdown/button-dropdown.component';

@Component({
  selector: 'app-button-list',
  imports: [CommonModule, ButtonDropdownComponent],
  templateUrl: './button-list.component.html',
})
export class ButtonListComponent {
  variants: Array<'primary' | 'secondary' | 'tertiary'> = ['primary', 'secondary', 'tertiary'];
}
