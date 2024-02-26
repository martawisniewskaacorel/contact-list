import { Injectable } from '@angular/core';
import {API_URL} from "../app.config";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private resultsSubject: BehaviorSubject<any[]> = new BehaviorSubject([] as any);
  results$ = this.resultsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAllResults(): Observable<any[]> {
    return this.http.get(API_URL) as Observable<any[]>;
  }

  setResults(results: any[]) {
    this.resultsSubject.next(results);
  }

  filterResults(query: string) {
    const filteredResults = this.resultsSubject.value.filter((contact => contact.name.includes(query)))
    this.setResults(filteredResults);
  }




}
