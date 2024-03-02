import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {CreateThoughtsComponent} from "./components/thoughts/create-thoughts/create-thoughts.component";
import {ThoughtsListComponent} from "./components/thoughts/thoughts-list/thoughts-list.component";
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CreateThoughtsComponent,
    ThoughtsListComponent,
    HttpClientModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'suyxteca';
}
