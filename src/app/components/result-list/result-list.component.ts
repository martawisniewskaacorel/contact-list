import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ListItemComponent} from "../list-item/list-item.component";
import {take, tap} from "rxjs";

@Component({
  selector: 'app-result-list',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgIf,
    ListItemComponent,
    NgForOf
  ],
  templateUrl: './result-list.component.html',
  styleUrl: './result-list.component.scss'
})
export class ResultListComponent implements OnInit{

  constructor(private searchService: SearchService) {
  }

  results$ = this.searchService.results$;

  ngOnInit() {
    this.searchService.getAllResults().pipe(
      take(1),
      tap(results => this.searchService.setResults(results))
    ).subscribe()
  }

}
