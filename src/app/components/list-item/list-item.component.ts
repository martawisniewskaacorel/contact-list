import {Component, Input, signal} from '@angular/core';
import {JsonPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {Contact} from "../../interfaces/contact";

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    JsonPipe,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() item: any;

  fullMode = false;
  changeMode(flag: boolean) {
    this.fullMode = flag;
  }

}
