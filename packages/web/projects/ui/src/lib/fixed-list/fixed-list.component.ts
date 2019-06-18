import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from './list-item';

@Component({
  selector: 'lib-fixed-list',
  templateUrl: './fixed-list.component.html',
  styleUrls: ['./fixed-list.component.css']
})
export class FixedListComponent implements OnInit {
  @Input() items: ListItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
