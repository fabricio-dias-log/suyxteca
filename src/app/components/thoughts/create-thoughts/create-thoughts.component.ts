import { Component } from '@angular/core';
import {ThoughtService} from "../thought.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {Thought} from "../thought";
import {NgClass, NgIf} from "@angular/common";
import {lowerCaseValidator} from "../../../validators/lowerCase.validator";

@Component({
  selector: 'app-create-thoughts',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    NgIf,
    NgClass
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
          Validators.minLength(3),
          lowerCaseValidator
        ])
      ],
      model: ['modelo1', [Validators.required]],
      favorite: [false]
    })
  }
  handleCreateThought() {
    if (this.form.valid) {
      this.service.createThought(this.form.value).subscribe(() => {
        this.router.navigate(['/thoughts'])
      });
    }
  }

  cancelThought() {
    this.router.navigate(['/thoughts'])
  }

  enableButton(): string {
    if (this.form.valid) {
      return 'botao'
    } else {
      return 'button__disabled'
    }
  }
}
