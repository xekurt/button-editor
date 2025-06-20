import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonCardComponent } from '@components/button-card/button-card';
import { DropdownComponent } from '@components/dropdown/dropdown';

@Component({
  selector: 'app-button-list',
  imports: [CommonModule, DropdownComponent, ButtonCardComponent],
  templateUrl: './button-list.html',
})
export class ButtonListComponent {
  variants = input<Array<'primary' | 'secondary' | 'tertiary'>>([
    'primary',
    'secondary',
    'tertiary',
  ]);
}
