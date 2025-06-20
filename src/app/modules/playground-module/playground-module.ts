import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlaygroundDescriptionComponent } from '@modules/playground-module/components/playground-description/playground-description';

@Component({
  selector: 'playground-module',
  imports: [CommonModule, PlaygroundDescriptionComponent],
  templateUrl: './playground-module.html',
})
export class PlaygroundModule {}
