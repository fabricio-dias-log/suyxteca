import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ThoughtComponent} from "../thought/thought.component";
import {NgForOf, NgIf} from "@angular/common";
import {Thought} from "../thought";
import {ThoughtService} from "../thought.service";

@Component({
  selector: 'app-thoughts-list',
  standalone: true,
  imports: [
    RouterLink,
    ThoughtComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './thoughts-list.component.html',
  styleUrl: './thoughts-list.component.css'
})
export class ThoughtsListComponent implements OnInit{
  thoughtsList: Thought[] = [];
  currentPage: number = 1;
  constructor(private service: ThoughtService) {
  }
  ngOnInit() {
    this.service.getThoughts(this.currentPage).subscribe(thoughts => this.thoughtsList = thoughts);
  }

}
