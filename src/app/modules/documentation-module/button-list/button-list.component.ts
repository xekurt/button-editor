import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomButtonComponent } from '@components/custom-button/custom-button.component';

@Component({
  selector: 'app-button-list',
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './button-list.component.html',
})
export class ButtonListComponent {
  statuses = ['Active', 'Inactive', 'Pending'];
  variants: Array<'primary' | 'secondary' | 'tertiary'> = ['primary', 'secondary', 'tertiary'];
  states: Array<'disabled' | 'loading'> = ['disabled', 'loading'];
  sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];
  openDropdowns: boolean[] = [true, false, false];

  toggleDropdown(idx: number) {
    this.openDropdowns[idx] = !this.openDropdowns[idx];
  }
}
