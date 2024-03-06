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
    this.service.getThoughts(this.currentPage).subscribe(thoughts => {
      thoughts.data.map((thought: Thought) => thought.favorite = (thought.favorite == 'true'))
    console.log(thoughts.data);

      this.thoughtsList = thoughts.data

    });
  }

  filterThoughts() {
    this.currentPage = 1;
    this.hasMoreThoughts = true;

    this.service.getThoughts(this.currentPage).subscribe(thoughts =>{
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
    if (!this.hasMoreThoughts) return;

    this.service.getThoughts(++this.currentPage).subscribe(
      thoughts => {
        this.thoughtsList = this.thoughtsList.concat(...thoughts.data);

        if (!thoughts.data.length) this.hasMoreThoughts = false;
      },
      error => {
        console.error('Error loading more thoughts:', error);
        // Aqui você pode adicionar mais tratamento de erro, como mostrar uma mensagem para o usuário
      }
    );
  }

  listFavorites() {
    this.currentPage = 1;
    this.hasMoreThoughts = true;

    this.service.listFavoriteThoughts(this.currentPage, this.filter).subscribe(thoughts =>{
      thoughts.data.map((thought: Thought) => thought.favorite = (thought.favorite == 'true'))

      this.thoughtsList = thoughts.data
    });
  }

}
