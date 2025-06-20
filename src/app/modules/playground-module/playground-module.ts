import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlaygroundDescriptionComponent } from '@modules/playground-module/components/playground-description/playground-description';
import { ButtonEditorComponent } from './components/button-editor/button-editor';

@Component({
  selector: 'playground-module',
  imports: [CommonModule, PlaygroundDescriptionComponent, ButtonEditorComponent],
  templateUrl: './playground-module.html',
})
export class PlaygroundModule {}
