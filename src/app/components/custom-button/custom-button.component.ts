import { Component, Input } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './custom-button.component.html',
})
export class CustomButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() state: 'default' | 'disabled' | 'loading' = 'default';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() startIcon?: string;
  @Input() endIcon?: string;
  @Input() href?: string;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() target?: string;

  get classes() {
    const base =
      'inline-flex items-center justify-center font-medium rounded transition-colors duration-150 cursor-pointer';
    const variants: Record<string, string> = {
      primary: 'bg-primary text-neutral-50 hover:bg-primary-dark',
      secondary:
        'bg-transparent border-2 text-primary hover:bg-primary-light hover:text-neutral-50',
      tertiary: 'bg-transparent text-primary hover:bg-primary-light hover:text-neutral-50',
    };
    const sizes: Record<string, string> = {
      small: 'px-sm py-xs text-xs',
      medium: 'px-md py-sm text-base',
      large: 'px-lg py-md text-lg',
    };
    const disabled =
      this.state === 'disabled' || this.state === 'loading' ? 'opacity-50 pointer-events-none' : '';
    return [base, variants[this.variant], sizes[this.size], disabled].join(' ');
  }
}
