// button-configurator.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioGroupComponent } from '@components/radiogroup/radiogroup';
import { CustomButtonComponent } from '@components/custom-button/custom-button';
import { ColorInputComponent } from '../../../../components/color-input/color-input';
import { ButtonEditorService } from './button-editor.service';

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
  constructor(public buttonEditor: ButtonEditorService) {}

  // Button event handler
  onButtonClick(): void {
    console.log('Button clicked!', {
      variant: this.buttonEditor.variant(),
      state: this.buttonEditor.state(),
      size: this.buttonEditor.size(),
    });
  }

  getButtonCode(): string {
    const variant = this.buttonEditor.variant();
    const state = this.buttonEditor.state();
    const size = this.buttonEditor.size();
    const color = this.buttonEditor.color();
    const backgroundColor = this.buttonEditor.backgroundColor();
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
}
