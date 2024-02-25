import { Component } from '@angular/core';
import {ThoughtService} from "../thought.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {Thought} from "../thought";

@Component({
  selector: 'app-create-thoughts',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './create-thoughts.component.html',
  styleUrl: './create-thoughts.component.css'
})
export class CreateThoughtsComponent {
  form!: FormGroup
  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      content: ['Content'],
      author: ['Author'],
      model: ['modelo1']
    })
  }
  handleCreateThought() {
    this.service.createThought(this.form.value).subscribe(()=>{
      this.router.navigate(['/thoughts'])
    });
  }

  cancelThought() {
    this.router.navigate(['/thoughts'])
  }
}
