import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomButtonComponent } from '../../../components/custom-button/custom-button.component';

@Component({
  selector: 'app-button-dropdown',
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './button-dropdown.component.html',
})
export class ButtonDropdownComponent {
  @Input() index: number;
  @Input() isOpen: boolean = false;
  @Input() variant: 'primary' | 'secondary' | 'tertiary';
  @Output() toggleDropdown = new EventEmitter();

  statuses = ['Active', 'Inactive', 'Pending'];
  states: Array<'disabled' | 'loading'> = ['disabled', 'loading'];
  sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];

  toggle(index) {
    this.toggleDropdown.emit(index);
  }
}
