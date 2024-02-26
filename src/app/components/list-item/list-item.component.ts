import {Component, Input} from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    JsonPipe,
    NgIf
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() item: any;

}
