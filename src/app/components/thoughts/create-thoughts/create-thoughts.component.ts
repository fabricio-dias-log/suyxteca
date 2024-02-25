import { Component } from '@angular/core';
import {ThoughtService} from "../thought.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {Thought} from "../thought";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-create-thoughts',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    NgIf
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
      content: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/(.|s)*\S(.|s)*/)
        ])
      ],
      author: ['', Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ],
      model: ['modelo1', [Validators.required]]
    })
  }
  handleCreateThought() {
    console.log(this.form)
    if (this.form.valid) {
      this.service.createThought(this.form.value).subscribe(() => {
        this.router.navigate(['/thoughts'])
      });
    }
  }

  cancelThought() {
    this.router.navigate(['/thoughts'])
  }
}
