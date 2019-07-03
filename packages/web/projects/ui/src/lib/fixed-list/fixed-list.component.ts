import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { ListItem } from './list-item';
import { DomSanitizer } from '@angular/platform-browser';
import jss from 'jss';
import { fixedListStyle } from './fixed-list.component.style';

@Component({
  selector: 'lib-fixed-list',
  templateUrl: './fixed-list.component.html',
})
export class FixedListComponent implements OnInit {
  @Input() items: ListItem[] = [];

  sheet = jss.createStyleSheet(fixedListStyle as any);

  styles = this.sheet.classes;

  constructor(public sanitizer: DomSanitizer) { }
  
  ngOnInit() {
    this.sheet.attach();
  }

  ngOnDestroy() {
    this.sheet.detach();
  }

  @HostBinding('class')
  hostStyle = this.sheet.classes.host;
}
