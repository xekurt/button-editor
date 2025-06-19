import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';

@Component({
  selector: 'app-playground-module',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './playground-module.component.html',
  styleUrl: './playground-module.component.css',
})
export class PlaygroundModule {
  statuses = ['Active', 'Inactive', 'Pending'];
  variants: Array<'primary' | 'secondary' | 'tertiary'> = ['primary', 'secondary', 'tertiary'];
  states: Array<'disabled' | 'loading'> = ['disabled', 'loading'];
  sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];
  openDropdowns: boolean[] = [true, false, false];

  toggleDropdown(idx: number) {
    this.openDropdowns[idx] = !this.openDropdowns[idx];
  }
}
