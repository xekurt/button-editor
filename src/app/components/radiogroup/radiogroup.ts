// radio-group.component.ts
import { Component, EventEmitter, forwardRef, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomButtonComponent } from '@components/custom-button/custom-button';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './radiogroup.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    },
  ],
})
export class RadioGroupComponent implements ControlValueAccessor {
  options = input<RadioOption[]>([]);

  ariaLabel = input<string>('');
  size = input<'small' | 'medium' | 'large'>('medium');
  variant = input<'contained' | 'outlined'>('outlined');

  selectionChange = new EventEmitter<string>();

  value = signal<string>('');

  // ControlValueAccessor implementation
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  selectOption(optionValue: string): void {
    this.value.set(optionValue);
    this.onChange(optionValue);
    this.selectionChange.emit(optionValue);
  }

  getButtonClasses(option: RadioOption, index: number): string {
    const baseClasses = [
      'relative',
      'inline-flex',
      'items-center',
      'justify-center',
      'font-medium',
      'transition-all',
      'duration-150',
      'focus:z-10',
      'cursor-pointer',
    ];

    // Size classes
    const sizeClasses = {
      small: ['px-3', 'py-1.5', 'text-xs'],
      medium: ['px-4', 'py-2', 'text-sm'],
      large: ['px-6', 'py-3', 'text-base'],
    };

    // Position classes (first, middle, last)
    const positionClasses = [];
    if (index === 0) {
      positionClasses.push('rounded-l-md');
    }
    if (index === this.options().length - 1) {
      positionClasses.push('rounded-r-md');
    }
    if (index > 0) {
      positionClasses.push('-ml-px');
    }

    // State and variant classes
    const isSelected = this.value() === option.value;
    const isDisabled = option.disabled;

    let stateClasses: string[] = [];

    if (this.variant() === 'outlined') {
      if (isSelected) {
        stateClasses = ['!bg-primary', 'text-white', 'z-10'];
      } else {
        stateClasses = ['border-gray-300', 'text-gray-700', 'hover:bg-gray-50'];
      }
      baseClasses.push('border');
    } else {
      // contained variant
      if (isSelected) {
        stateClasses = ['bg-blue-600', 'text-white', 'z-10'];
      } else {
        stateClasses = ['bg-gray-100', 'text-gray-700', 'hover:bg-gray-200'];
      }
    }

    // Disabled classes
    if (isDisabled) {
      stateClasses = ['bg-gray-100', 'text-gray-400', 'cursor-not-allowed', 'border-gray-300'];
    }

    return [...baseClasses, ...sizeClasses[this.size()], ...positionClasses, ...stateClasses].join(
      ' ',
    );
  }

  trackByValue(index: number, option: RadioOption): string {
    return option.value;
  }
}
