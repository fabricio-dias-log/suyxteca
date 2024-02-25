import {Component, OnInit} from '@angular/core';
import {Thought} from "../thought";
import {ThoughtService} from "../thought.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-thought',
  standalone: true,
  imports: [],
  templateUrl: './delete-thought.component.html',
  styleUrl: './delete-thought.component.css'
})
export class DeleteThoughtComponent implements OnInit{
  thought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: ''
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getThoughtById(parseInt(id!)).subscribe(thought => this.thought = thought);
  }

  removeThought(){
    if (!this.thought.id) return;

    this.service.deleteThought(this.thought.id).subscribe(() => this.router.navigate(['/thoughts']));
  }

  cancel(){
    this.router.navigate(['/thoughts']);
  }

}
