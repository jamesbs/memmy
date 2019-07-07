import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.css']
})
export class ActionDialogComponent implements OnInit {
  @Input() title = '';
  
  constructor() { }

  ngOnInit() {
  }

}
