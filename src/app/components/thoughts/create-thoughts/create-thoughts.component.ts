import { Component } from '@angular/core';
import {ThoughtService} from "../thought.service";
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {Thought} from "../thought";

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
  thoughts: Thought = {
    content: '',
    author: '',
    model: ''
  }
  constructor(private service: ThoughtService, private router: Router) {
  }
  handleCreateThought() {
    this.service.createThought(this.thoughts).subscribe(()=>{
      this.router.navigate(['/thoughts'])
    });
  }

  cancelThought() {
    this.router.navigate(['/thoughts'])
  }
}
