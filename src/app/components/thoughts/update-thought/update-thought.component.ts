import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Thought} from "../thought";
import {ThoughtService} from "../thought.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-thought',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './update-thought.component.html',
  styleUrl: './update-thought.component.css'
})
export class UpdateThoughtComponent implements OnInit{
  thoughts: Thought = {
    id: 0,
    content: '',
    author: '',
    model: ''
  }
  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getThoughtById(id!).subscribe(thought => this.thoughts = thought);
  }

  handleUpdateThought() {
    this.service.updateThought(this.thoughts).subscribe(()=>{
      this.router.navigate(['/thoughts'])
    });
  }
  cancel(){
    this.router.navigate(['/thoughts'])
  }
}
