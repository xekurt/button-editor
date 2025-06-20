import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomButtonComponent } from '@components/custom-button/custom-button';

@Component({
  selector: 'button-card',
  templateUrl: './button-card.html',
  imports: [CustomButtonComponent, NgFor],
})
export class ButtonCardComponent {
  @Input() variant: 'primary' | 'secondary' | 'tertiary';
  states: Array<'disabled' | 'loading'> = ['disabled', 'loading'];
  sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];
}
