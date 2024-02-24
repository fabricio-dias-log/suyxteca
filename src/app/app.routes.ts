import { Routes } from '@angular/router';
import {CreateThoughtsComponent} from "./components/thoughts/create-thoughts/create-thoughts.component";
import {ThoughtsListComponent} from "./components/thoughts/thoughts-list/thoughts-list.component";

export const routes: Routes = [
  { path: '', redirectTo: 'listThoughts', pathMatch: 'full'},
  { path: 'createThoughts',component: CreateThoughtsComponent },
  { path: 'listThoughts',component: ThoughtsListComponent }
];
