import { Component, HostBinding } from '@angular/core';
import jss from 'jss';
import { appStyle } from './app.component.style';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';

  sheet = jss.createStyleSheet(appStyle as any)

  ngOnInit() {
    this.sheet.attach();
  }

  ngOnDestroy() {
    this.sheet.detach();
  }

  @HostBinding('class')
  style = this.sheet.classes.app;
}
