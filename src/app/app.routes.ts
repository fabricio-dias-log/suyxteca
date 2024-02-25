import { Routes } from '@angular/router';
import {CreateThoughtsComponent} from "./components/thoughts/create-thoughts/create-thoughts.component";
import {ThoughtsListComponent} from "./components/thoughts/thoughts-list/thoughts-list.component";
import {DeleteThoughtComponent} from "./components/thoughts/delete-thought/delete-thought.component";

export const routes: Routes = [
  { path: '', redirectTo: 'thoughts', pathMatch: 'full'},
  { path: 'createThoughts',component: CreateThoughtsComponent },
  { path: 'thoughts',component: ThoughtsListComponent },
  { path: 'thoughts/removeThought/:id',component: DeleteThoughtComponent}
];
