import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  query = '';

  constructor(private searchService: SearchService) {

  }
  filterResults() {
    this.searchService.filterResults(this.query);
  }
}
