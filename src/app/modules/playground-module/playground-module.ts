import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playground-module',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playground-module.html',
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
