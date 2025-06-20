import { NgFor } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { CustomButtonComponent } from '@components/custom-button/custom-button';

@Component({
  selector: 'button-card',
  templateUrl: './button-card.html',
  imports: [CustomButtonComponent, NgFor],
})
export class ButtonCardComponent {
  variant = input<'primary' | 'secondary' | 'tertiary'>();
  states = signal<Array<'disabled' | 'loading'>>(['disabled', 'loading']);
  sizes = signal<Array<'small' | 'medium' | 'large'>>(['small', 'medium', 'large']);
}
