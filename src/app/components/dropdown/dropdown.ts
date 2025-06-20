import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'dropdown',
  imports: [CommonModule],
  templateUrl: './dropdown.html',
  animations: [
    trigger('dropdownContent', [
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden',
          paddingTop: '0',
          paddingBottom: '0',
        }),
      ),
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
          overflow: 'hidden',
          paddingTop: '*',
          paddingBottom: '*',
        }),
      ),
      transition('closed <=> open', animate('300ms cubic-bezier(0.4,0,0.2,1)')),
    ]),
  ],
})
export class DropdownComponent {
  title = input<string>();
  isOpen = signal<boolean>(true);
  animating = signal<boolean>(false);

  toggle() {
    this.isOpen.update((open) => !open);
  }
}
