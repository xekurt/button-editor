import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonCardComponent } from '@components/button-card/button-card';
import { DropdownComponent } from '@components/dropdown/dropdown';

@Component({
  selector: 'app-button-list',
  imports: [CommonModule, DropdownComponent, ButtonCardComponent],
  templateUrl: './button-list.component.html',
})
export class ButtonListComponent {
  variants: Array<'primary' | 'secondary' | 'tertiary'> = ['primary', 'secondary', 'tertiary'];
}
