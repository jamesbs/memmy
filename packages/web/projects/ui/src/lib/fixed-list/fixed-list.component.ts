import { Component, Input } from '@angular/core';
import { ListItem } from './list-item';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lib-fixed-list',
  templateUrl: './fixed-list.component.html',
  styleUrls: ['./fixed-list.component.css']
})
export class FixedListComponent {
  @Input() items: ListItem[] = [];

  constructor(public sanitizer: DomSanitizer) { }
}
