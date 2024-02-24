import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-create-thoughts',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './create-thoughts.component.html',
  styleUrl: './create-thoughts.component.css'
})
export class CreateThoughtsComponent {
  thoughts = {
    id: 1,
    content: 'This is a thought',
    author: 'Dev',
    model: ''
  }
  createThought() {
    alert('Thought created')
  }

  cancelThought() {
    alert('Thought cancelled')
  }
}
