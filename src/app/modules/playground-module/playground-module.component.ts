import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';

@Component({
  selector: 'app-playground-module',
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './playground-module.component.html',
  styleUrl: './playground-module.component.css',
})
export class PlaygroundModule {
  statuses = ['Active', 'Inactive', 'Pending'];
  variants: Array<'primary' | 'secondary' | 'tertiary'> = ['primary', 'secondary', 'tertiary'];
  states: Array<'default' | 'disabled' | 'loading'> = ['default', 'disabled', 'loading'];
}
