// radio-group.component.ts
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [CommonModule],
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
  @Input() options: RadioOption[] = [];
  @Input() disabled: boolean = false;
  @Input() ariaLabel: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() variant: 'contained' | 'outlined' = 'outlined';

  @Output() selectionChange = new EventEmitter<string>();

  value: string = '';

  // ControlValueAccessor implementation
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  selectOption(optionValue: string): void {
    if (this.disabled) return;

    this.value = optionValue;
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
      'focus:outline-none',
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
    if (index === this.options.length - 1) {
      positionClasses.push('rounded-r-md');
    }
    if (index > 0) {
      positionClasses.push('-ml-px');
    }

    // State and variant classes
    const isSelected = this.value === option.value;
    const isDisabled = option.disabled || this.disabled;

    let stateClasses: string[] = [];

    if (this.variant === 'outlined') {
      if (isSelected) {
        stateClasses = ['bg-blue-50', 'border-blue-500', 'text-primary', 'z-10'];
      } else {
        stateClasses = ['bg-white', 'border-gray-300', 'text-gray-700', 'hover:bg-gray-50'];
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

    // Focus classes
    const focusClasses =
      this.variant === 'outlined'
        ? ['focus:ring-2', 'focus:ring-blue-500', 'focus:border-blue-500']
        : ['focus:ring-2', 'focus:ring-blue-500', 'focus:ring-offset-2'];

    // Disabled classes
    if (isDisabled) {
      stateClasses = ['bg-gray-100', 'text-gray-400', 'cursor-not-allowed', 'border-gray-300'];
    }

    return [
      ...baseClasses,
      ...sizeClasses[this.size],
      ...positionClasses,
      ...stateClasses,
      ...(isDisabled ? [] : focusClasses),
    ].join(' ');
  }

  trackByValue(index: number, option: RadioOption): string {
    return option.value;
  }
}
