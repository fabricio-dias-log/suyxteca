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
  favorites: boolean = false;

  constructor(private service: ThoughtService) {
  }

  ngOnInit() {
    this.service.getThoughts(this.currentPage, this.favorites).subscribe(thoughts => {
      thoughts.data.map((thought: Thought) => thought.favorite = (thought.favorite == 'true'))
      this.thoughtsList = thoughts.data
    });
  }

  filterThoughts() {
    this.currentPage = 1;
    this.hasMoreThoughts = true;

    this.service.getThoughts(this.currentPage, this.favorites).subscribe(thoughts =>{
      if (this.filter && this.filter !== '') {
        let filterUpperCase: string = this.filter.toUpperCase();
        this.thoughtsList = thoughts.data.filter(function (thought: Thought){
            return thought.content.toUpperCase().indexOf(filterUpperCase) >= 0 ||
              thought.author.toUpperCase().indexOf(filterUpperCase) >= 0 ||
              thought.model.toUpperCase().indexOf(filterUpperCase) >= 0;
          }
        );
      }
    });
  }

  loadMoreThoughts() {
    this.service.getThoughts(++this.currentPage, this.favorites)
      .subscribe(thoughts => {
        this.thoughtsList.push(...thoughts.data);
        if(!thoughts.length) {
          this.hasMoreThoughts = false
        }
      })
  }

  listFavorites() {
    this.favorites = true;
    this.currentPage = 1;
    this.hasMoreThoughts = true;

    this.service.getThoughts(this.currentPage, this.favorites).subscribe(thoughts =>{
      thoughts.data.map((thought: Thought) => thought.favorite = (thought.favorite == 'true'))

      this.thoughtsList = thoughts.data
    });
  }

}
