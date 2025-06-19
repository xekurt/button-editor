import { Component } from '@angular/core';
import { CustomButtonComponent } from '@components/custom-button/custom-button.component';

@Component({
  selector: 'app-description',
  imports: [CustomButtonComponent],
  templateUrl: './description.component.html',
})
export class DescriptionComponent {}
