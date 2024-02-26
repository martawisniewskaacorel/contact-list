import { Injectable } from '@angular/core';
import {API_URL} from "../app.config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearchResults(query: string): Observable<any[]> {
    return this.http.get(API_URL) as Observable<any[]>;
  }
}
