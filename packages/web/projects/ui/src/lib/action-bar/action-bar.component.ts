import { Component, OnInit } from '@angular/core';
import jss from 'jss';
import { actionBarStyle } from './action-bar.component.style';

@Component({
  selector: 'lib-action-bar',
  templateUrl: './action-bar.component.html'
})
export class ActionBarComponent implements OnInit {
  sheet = jss.createStyleSheet(actionBarStyle);

  constructor() { }

  ngOnInit() {
    this.sheet.attach();
  }

  ngOnDestroy() {
    this.sheet.detach();
  }

}
