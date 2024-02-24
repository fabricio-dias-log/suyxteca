import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-thought',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.css'
})
export class ThoughtComponent {
  @Input() thought = {
    content: 'I love Angular',
    author: 'Fabricio',
    model: 'modelo3'
  }

  widthThought(): string {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g'
    }

    return 'pensamento-p'
  }
}
