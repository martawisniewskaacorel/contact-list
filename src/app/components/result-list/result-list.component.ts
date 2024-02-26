import { Component } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ListItemComponent} from "../list-item/list-item.component";

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
export class ResultListComponent {

  constructor(private searchService: SearchService) {
  }

  results$ = this.searchService.getSearchResults('');

}
