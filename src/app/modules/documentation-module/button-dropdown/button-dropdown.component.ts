import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomButtonComponent } from '../../../components/custom-button/custom-button.component';

@Component({
  selector: 'app-button-dropdown',
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './button-dropdown.component.html',
})
export class ButtonDropdownComponent {
  @Input() variant: 'primary' | 'secondary' | 'tertiary';

  statuses = ['Active', 'Inactive', 'Pending'];
  states: Array<'disabled' | 'loading'> = ['disabled', 'loading'];
  sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];

  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
