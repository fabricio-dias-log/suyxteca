import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Thought} from "./thought";

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private readonly API: string = 'http://localhost:3000/thoughts';
  constructor(private http: HttpClient) { }

  getThoughts(): Observable<Thought[]>{
    return this.http.get<Thought[]>(this.API);
  }


}
