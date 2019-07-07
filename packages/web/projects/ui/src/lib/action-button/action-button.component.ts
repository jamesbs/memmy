import { Component, Input } from '@angular/core';
import jss from 'jss';
import { actionButtonStyle } from './action-button.component.style';
import { nullOperation } from '@memmy/model';

@Component({
  selector: 'lib-action-button',
  templateUrl: './action-button.component.html',
})
export class ActionButtonComponent {
  sheet = jss.createStyleSheet(actionButtonStyle);

  ngOnInit() {
    this.sheet.attach();
  }

  ngOnDestroy() {
    this.sheet.detach();
  } 

  @Input() onClick = nullOperation;
}
