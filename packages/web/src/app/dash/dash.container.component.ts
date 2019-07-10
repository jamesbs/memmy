import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GalleryProps, asToken } from '@memmy/model';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getServerToken } from '../model/state/selector/server/server';
import { RootState } from '../model/state/store/root';
import { LogoutService } from '../model/auth/logout.service';

@Component({
  selector: 'app-dash-container',
  template: `
    <app-dash 
      [galleries]="galleries | async"
      [logout]="logout | async">
    </app-dash>`
})
export class DashContainerComponent {

  galleries: Observable<GalleryProps[]> = this.route.data.pipe(map(({ galleries }) => galleries));

  logout = this.store.select(getServerToken).pipe(
    map(token => () => this.logoutService.logout(token)),
  );

  constructor(
    private route: ActivatedRoute,
    private store: Store<RootState>,
    private logoutService: LogoutService) {
  }
}
