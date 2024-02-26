import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {SearchComponent} from "./components/search/search.component";
import {ResultListComponent} from "./components/result-list/result-list.component";
import {SearchService} from "./services/search.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [SearchService],
  imports: [CommonModule, RouterOutlet, SearchComponent, ResultListComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Contact List';
}
