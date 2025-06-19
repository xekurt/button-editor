import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomButtonComponent } from '@components/custom-button/custom-button.component';
import { ButtonDropdownComponent } from '../button-dropdown/button-dropdown.component';

@Component({
  selector: 'app-button-list',
  imports: [CommonModule, CustomButtonComponent, ButtonDropdownComponent],
  templateUrl: './button-list.component.html',
})
export class ButtonListComponent {
  variants: Array<'primary' | 'secondary' | 'tertiary'> = ['primary', 'secondary', 'tertiary'];
  openDropdowns: boolean[] = [true, false, false];

  toggleDropdown(idx: number) {
    this.openDropdowns[idx] = !this.openDropdowns[idx];
  }
}
