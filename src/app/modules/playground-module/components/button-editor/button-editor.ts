// button-configurator.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioGroupComponent, RadioOption } from '@components/radiogroup/radiogroup';
import { CustomButtonComponent } from '@components/custom-button/custom-button';
import { ButtonSize, ButtonState, ButtonVariant } from '@components/custom-button/types';

@Component({
  selector: 'button-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, RadioGroupComponent, CustomButtonComponent],
  templateUrl: './button-editor.html',
})
export class ButtonEditorComponent {
  // Button configuration properties
  variant = signal<ButtonVariant>('primary');
  state = signal<ButtonState>('default');
  size = signal<ButtonSize>('medium');

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
}
