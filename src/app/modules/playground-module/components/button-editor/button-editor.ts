// button-configurator.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioGroupComponent, RadioOption } from '@components/radiogroup/radiogroup';
import { CustomButtonComponent } from '@components/custom-button/custom-button';
import { ButtonSize, ButtonState, ButtonVariant } from '@components/custom-button/types';
import { ColorInputComponent } from '../../../../components/color-input/color-input';

@Component({
  selector: 'button-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RadioGroupComponent,
    CustomButtonComponent,
    ColorInputComponent,
  ],
  templateUrl: './button-editor.html',
})
export class ButtonEditorComponent {
  // Button configuration properties
  variant = signal<ButtonVariant>('primary');
  state = signal<ButtonState>('default');
  size = signal<ButtonSize>('medium');
  color = signal<string | undefined>('');
  backgroundColor = signal<string | undefined>('#4338CA');

  // Available options for radio groups
  variantOptions: RadioOption[] = [
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'tertiary', label: 'Tertiary' },
  ];

  stateOptions: RadioOption[] = [
    { value: 'default', label: 'Default' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' },
  ];

  sizeOptions: RadioOption[] = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  // Button event handler
  onButtonClick(): void {
    console.log('Button clicked!', {
      variant: this.variant,
      state: this.state,
      size: this.size,
    });
  }
  handleVariantChange(newVariant: ButtonVariant) {
    this.variant.update(() => newVariant);
  }
  handleStateChange(newVariant: ButtonState) {
    this.state.update(() => newVariant);
  }
  handleSizeChange(newVariant: ButtonSize) {
    this.size.update(() => newVariant);
  }
  // Handlers for color changes
  handleColorChange(newColor: string) {
    this.color.set(newColor);
  }

  handleBackgroundColorChange(newBackgroundColor: string) {
    this.backgroundColor.set(newBackgroundColor);
  }

  private luminance(hex: string): number {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map((x) => x + x)
        .join('');
    }
    const rgb = [0, 1, 2].map((i) => parseInt(hex.substr(i * 2, 2), 16) / 255);
    const a = rgb.map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  }

  // Utility: Calculate contrast ratio between two hex colors
  private contrastRatio(hex1: string, hex2: string): number {
    const lum1 = this.luminance(hex1);
    const lum2 = this.luminance(hex2);
    return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
  }

  // Check if the current color combination is accessible (WCAG AA, ratio >= 4.5)
  get isAccessible(): boolean {
    const fg = this.color() || '#fff';
    const bg = this.variant() === 'primary' ? this.backgroundColor() || '#4338CA' : '#fff';
    if (this.variant() !== 'primary') return true;
    return this.contrastRatio(fg, bg) >= 4.5;
  }

  // Warning message for template
  get accessibilityWarning(): string | null {
    return this.isAccessible
      ? null
      : '⚠️ The selected text and background color combination is not accessible (contrast ratio too low).';
  }
}
