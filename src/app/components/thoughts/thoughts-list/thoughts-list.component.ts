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

  filterThoughts() {
    this.currentPage = 1;
    this.hasMoreThoughts = true;

    this.service.getThoughts(this.currentPage).subscribe(thoughts =>{
      if (!this.filter) {
        this.thoughtsList = thoughts;
        return;
      }

      let filterUpperCase: string = this.filter.toUpperCase();

      this.thoughtsList = thoughts.filter(thought =>
        thought.content.toUpperCase().indexOf(filterUpperCase) >= 0 ||
        thought.author.toUpperCase().indexOf(filterUpperCase) >= 0 ||
        thought.model.toUpperCase().indexOf(filterUpperCase) >= 0
      );
    });
  }

  compareFields(value: string, fields: string[]): boolean {
    let trueFields: string[] = [];

    return false;
  }

  loadMoreThoughts() {
    this.service.getThoughts(++this.currentPage).subscribe(thoughts => {
      this.thoughtsList.push(...thoughts);

      if (!thoughts.length) this.hasMoreThoughts = false;
    });
  }

}
