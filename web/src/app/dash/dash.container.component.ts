import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { LogoutService } from '../model/auth/logout.service';
import galleries from '../model/gallery/galleries';
import serverToken from '../model/auth/server-token';

@Component({
  selector: 'app-dash-container',
  template: `
    <app-dash 
      [galleries]="galleries | async"
      [logout]="logout | async">
    </app-dash>`
})
export class DashContainerComponent {

  galleries = galleries;

  logout = serverToken.pipe(
    map(token => () => this.logoutService.logout(token)),
  );

  constructor(
    private logoutService: LogoutService) {

    this.galleries.subscribe(val => {
      console.log('galleries')
      console.log(val);
    })
  }
}
