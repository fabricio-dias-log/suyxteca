import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Thought } from "../thought";
import { ThoughtService } from "../thought.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgClass, NgIf } from "@angular/common";
import { lowerCaseValidator } from "../../../validators/lowerCase.validator";

@Component({
  selector: 'app-update-thought',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './update-thought.component.html',
  styleUrl: './update-thought.component.css'
})
export class UpdateThoughtComponent implements OnInit {
  form!: FormGroup
  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      content: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|s)*\S(.|s)*/)
      ])
      ],
      author: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          lowerCaseValidator
        ])
      ],
      model: ['modelo1', [Validators.required]],
      favorite: [false]
    })
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getThoughtById(id!).subscribe(thought => this.form.setValue(thought));
  }

  handleUpdateThought() {
    if (this.form.valid) {
      this.service.updateThought(this.form.value).subscribe(() => {
        this.router.navigate(['/thoughts'])
      });
    }
  }

  cancel() {
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
