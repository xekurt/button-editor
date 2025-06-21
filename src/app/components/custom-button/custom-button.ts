import { Component, input } from '@angular/core';
import { NgIf, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [NgIf, NgClass, NgStyle],
  templateUrl: './custom-button.html',
})
export class CustomButtonComponent {
  variant = input<'primary' | 'secondary' | 'tertiary'>('primary');
  state = input<'default' | 'disabled' | 'loading'>('default');
  size = input<'small' | 'medium' | 'large'>('medium');
  startIcon = input<string | undefined>();
  endIcon = input<string | undefined>();
  href = input<string | undefined>();
  type = input<'button' | 'submit'>('button');
  target = input<string | undefined>();
  class = input<string>('');
  color = input<string | undefined>();
  backgroundColor = input<string | undefined>();

  get classes() {
    const base =
      'inline-flex items-center justify-center font-medium rounded transition-colors duration-150 cursor-pointer dark:text-neutral-50';
    const variants: Record<string, string> = {
      primary: 'bg-primary text-neutral-50 hover:bg-primary-dark',
      secondary:
        'bg-transparent border-2 border-primary text-primary hover:bg-primary-light hover:text-neutral-50',
      tertiary: 'bg-transparent text-primary hover:bg-primary-light hover:text-neutral-50',
    };
    const sizes: Record<string, string> = {
      small: 'px-sm py-xs text-xs',
      medium: 'px-md py-sm text-base',
      large: 'px-lg py-md text-lg',
    };
    const disabled = this.isInActive ? 'opacity-50 pointer-events-none' : '';
    // User-provided class should have highest priority
    return [base, variants[this.variant()], sizes[this.size()], disabled, this.class()].join(' ');
  }
  get isInActive() {
    return this.state() === 'disabled' || this.state() === 'loading';
  }
  get styles() {
    // Allow user to override color and background color via hex code
    const styles: Record<string, string> = {};
    if (this.variant() === 'secondary') {
      if (this.color()) {
        styles['color'] = this.color()!;
        styles['borderColor'] = this.color()!;
      }
      if (this.backgroundColor()) {
        styles['backgroundColor'] = this.backgroundColor()!;
      }
    } else {
      if (this.color()) {
        styles['color'] = this.color()!;
      }
      if (this.backgroundColor()) {
        styles['backgroundColor'] = this.backgroundColor()!;
      }
    }
    return styles;
  }
}
