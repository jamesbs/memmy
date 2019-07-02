import { Component, OnDestroy, OnInit } from '@angular/core';
import jss from 'jss';
import { linkStyle } from '../style/link.style';

@Component({
  selector: 'lib-simple-header',
  templateUrl: './simple-header.component.html',
  styleUrls: ['./simple-header.component.css']
})
export class SimpleHeaderComponent implements OnInit, OnDestroy {
  sheet = jss.createStyleSheet({
    link: linkStyle,
  });

  ngOnInit() {
    this.sheet.attach();
  }

  ngOnDestroy() {
    this.sheet.detach();
  }

}
