import { Injectable } from '@angular/core';
import {API_URL} from "../app.config";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Contact} from "../interfaces/contact";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private resultsSubject: BehaviorSubject<any[]> = new BehaviorSubject([] as Contact[]);
  results$ = this.resultsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAllResults(): Observable<Contact[]> {
    return this.http.get(API_URL) as Observable<Contact[]>;
  }

  setResults(results: Contact[]) {
    this.resultsSubject.next(results);
  }

  filterResults(query: string) {
    return this.getAllResults().pipe(map((results: Contact[]) => {
      // @ts-ignore
      return results.filter((contact: Contact) => query.toLowerCase() ? contact.name?.toLowerCase().indexOf(query.toLowerCase())>-1 : true)
    }))
  }




}
