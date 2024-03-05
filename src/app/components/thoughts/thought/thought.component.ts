import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {Thought} from "../thought";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-thought',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.css'
})
export class ThoughtComponent {
  @Input() thought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: 'modelo3',
    favorite: false
  }

  widthThought(): string {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g'
    }

    return 'pensamento-p'
  }

  changeFavoriteIcon(): string {
    if (this.thought.favorite == false) {
      return 'inativo'
    }else {
      return 'ativo'
    }
  }
}
