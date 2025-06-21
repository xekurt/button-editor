import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-input.html',
  styles: [],
})
export class ColorInputComponent implements OnInit {
  @Input() value: string = '#000000';
  @Input() disabled: boolean = false;
  @Output() valueChange = new EventEmitter<string>();

  isOpen = false;
  inputValue = '';

  presetColors = [
    '#000000',
    '#ffffff',
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#ff00ff',
    '#00ffff',
    '#800000',
    '#008000',
    '#000080',
    '#808000',
    '#800080',
    '#008080',
    '#c0c0c0',
    '#808080',
    '#ff6b6b',
    '#4ecdc4',
    '#45b7d1',
    '#96ceb4',
    '#feca57',
    '#ff9ff3',
    '#54a0ff',
    '#5f27cd',
    '#00d2d3',
    '#ff9f43',
    '#10ac84',
    '#ee5253',
    '#0abde3',
    '#3742fa',
    '#2f3542',
    '#747d8c',
  ];

  ngOnInit() {
    this.inputValue = this.value;
  }

  togglePicker() {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.inputValue = this.value;
    }
  }

  closePicker() {
    this.isOpen = false;
  }

  onColorChange(event: Event) {
    if (this.disabled) return;
    const target = event.target as HTMLInputElement;
    this.selectColor(target.value);
  }

  onInputChange() {
    if (this.disabled) return;
    const color = this.inputValue.trim();
    if (this.isValidColor(color)) {
      this.selectColor(color);
    } else {
      // Reset to current value if invalid
      this.inputValue = this.value;
    }
  }

  selectColor(color: string) {
    if (this.disabled) return;
    this.value = color;
    this.inputValue = color;
    this.valueChange.emit(color);
  }

  private isValidColor(color: string): boolean {
    // Basic hex color validation
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (hexRegex.test(color)) {
      return true;
    }

    // Check if it's a valid CSS color name by creating a temporary element
    const tempElement = document.createElement('div');
    tempElement.style.color = color;
    return tempElement.style.color !== '';
  }
}
