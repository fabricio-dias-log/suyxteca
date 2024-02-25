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

  createThought(thought: Thought): Observable<Thought>{
    return this.http.post<Thought>(this.API, thought);
  }
  getThoughtById(id: string | number): Observable<Thought>{
    return this.http.get<Thought>(`${this.API}/${id}`);
  }

  deleteThought(thought: Thought): Observable<Thought>{
    const url = `${this.API}/${thought.id}`;

    return this.http.delete<Thought>(url);
  }

  updateThought(thought: Thought): Observable<Thought>{
    const url = `${this.API}/${thought.id}`;

    return this.http.put<Thought>(url, thought);
  }



}
