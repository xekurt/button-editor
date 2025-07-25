import { Injectable, signal } from '@angular/core';
import { ButtonSize, ButtonState, ButtonVariant } from '@components/custom-button/types';
import { RadioOption } from '@components/radiogroup/radiogroup';

@Injectable({ providedIn: 'root' })
export class ButtonEditorService {
  variant = signal<ButtonVariant>('primary');
  state = signal<ButtonState>('default');
  size = signal<ButtonSize>('medium');
  color = signal<string | undefined>('');
  backgroundColor = signal<string | undefined>('#800080');

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

  handleVariantChange(newVariant: ButtonVariant) {
    this.variant.update(() => newVariant);
  }
  handleStateChange(newState: ButtonState) {
    this.state.update(() => newState);
  }
  handleSizeChange(newSize: ButtonSize) {
    this.size.update(() => newSize);
  }
  handleColorChange(newColor: string) {
    this.color.set(newColor);
  }
  handleBackgroundColorChange(newBackgroundColor: string) {
    this.backgroundColor.set(newBackgroundColor);
  }
  getButtonCode(): string {
    const variant = this.variant();
    const state = this.state();
    const size = this.size();
    const color = this.color();
    const backgroundColor = this.backgroundColor();
    let code = `<app-custom-button`;
    code += `\n  variant=\"${variant}\"`;
    code += `\n  state=\"${state}\"`;
    code += `\n  size=\"${size}\"`;
    if (color) code += `\n  color=\"${color}\"`;
    if (variant === 'primary' && backgroundColor)
      code += `\n  backgroundColor=\"${backgroundColor}\"`;
    code += `\n>`;
    code += `\n  Your Button`;
    code += `\n</app-custom-button>`;
    return code;
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

  private contrastRatio(hex1: string, hex2: string): number {
    const lum1 = this.luminance(hex1);
    const lum2 = this.luminance(hex2);
    return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
  }

  get isAccessible(): boolean {
    const fg = this.color() || '#fff';
    const bg = this.variant() === 'primary' ? this.backgroundColor() || '#4338CA' : '#fff';
    if (this.variant() !== 'primary') return true;
    return this.contrastRatio(fg, bg) >= 4.5;
  }

  get accessibilityWarning(): string | null {
    return this.isAccessible
      ? null
      : '⚠️ The selected text and background color combination is not accessible (contrast ratio too low).';
  }
}
