import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ThoughtComponent} from "../thought/thought.component";
import {NgForOf, NgIf} from "@angular/common";
import {Thought} from "../thought";
import {ThoughtService} from "../thought.service";
import {LoadMoreButtonComponent} from "./load-more-button/load-more-button.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-thoughts-list',
  standalone: true,
  imports: [
    RouterLink,
    ThoughtComponent,
    NgForOf,
    NgIf,
    LoadMoreButtonComponent,
    FormsModule
  ],
  templateUrl: './thoughts-list.component.html',
  styleUrl: './thoughts-list.component.css'
})
export class ThoughtsListComponent implements OnInit{
  thoughtsList: Thought[] = [];
  currentPage: number = 1;
  hasMoreThoughts: boolean = true;
  filter: string = '';
  constructor(private service: ThoughtService) {
  }
  ngOnInit() {
    this.service.getThoughts(this.currentPage).subscribe(thoughts => this.thoughtsList = thoughts);
  }

  loadMoreThoughts() {
    this.service.getThoughts(++this.currentPage).subscribe(thoughts => {
      this.thoughtsList.push(...thoughts);

      if (!thoughts.length) this.hasMoreThoughts = false;
    });
  }

}
