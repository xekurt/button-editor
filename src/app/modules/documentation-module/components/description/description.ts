import { Component } from '@angular/core';
import { CustomButtonComponent } from '@components/custom-button/custom-button';

@Component({
  selector: 'app-description',
  imports: [CustomButtonComponent],
  templateUrl: './description.component.html',
})
export class DescriptionComponent {}
