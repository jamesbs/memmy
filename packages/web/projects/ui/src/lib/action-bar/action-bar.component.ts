import { Component, OnInit, HostBinding } from '@angular/core';
import jss from 'jss';
import { barStyle } from './action-bar.component.style';

@Component({
  selector: 'lib-action-bar',
  templateUrl: './action-bar.component.html'
})
export class ActionBarComponent implements OnInit {
  sheet = jss.createStyleSheet({ 
    bar: barStyle,
  });

  constructor() { }

  ngOnInit() {
    this.sheet.attach();
  }

  ngOnDestroy() {
    this.sheet.detach();
  }

  @HostBinding('class')
  style = this.sheet.classes.bar;

}
