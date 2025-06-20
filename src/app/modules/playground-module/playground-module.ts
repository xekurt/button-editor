import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playground-module',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playground-module.html',
})
export class PlaygroundModule {}
