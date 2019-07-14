import { Component, OnDestroy, OnInit } from '@angular/core';
import jss from 'jss';
import { linkStyle, headerStyle, h1Style } from './simple-header.component.style';

@Component({
  selector: 'lib-simple-header',
  templateUrl: './simple-header.component.html',
})
export class SimpleHeaderComponent implements OnInit, OnDestroy {
  sheet = jss.createStyleSheet({
    link: linkStyle,
    header: headerStyle,
    h1: h1Style,
  });

  ngOnInit() {
    this.sheet.attach();
  }

  ngOnDestroy() {
    this.sheet.detach();
  }

}
