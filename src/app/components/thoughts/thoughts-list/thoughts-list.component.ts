import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {ThoughtComponent} from "../thought/thought.component";
import {NgForOf, NgIf} from "@angular/common";

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
export class ThoughtsListComponent {
  thoughtsList = [
    {
      content: 'I love Angular',
      author: 'Fabricio',
      model: 'modelo3'
    },
    {
      content: 'Lets go to the beach',
      author: 'Fabricio',
      model: 'modelo2'
    },
    {
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, ' +
        'by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, ' +
        'you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend ' +
        'to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, ' +
        'combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable',
      author: 'Fabricio',
      model: 'modelo1'
    }
  ];
}
