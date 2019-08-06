import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../model/state/store/root';
import { getRecentlyLoggedOutState } from '../model/state/selector/root';
import { HomeRoutingService } from './home-routing.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecentlyLoggedOutGuard implements CanActivate {
  constructor(
    private homeRoutingService: HomeRoutingService,
    private store: Store<RootState>) { }

  canActivate() {
    return this.store.select(getRecentlyLoggedOutState)
      .pipe(
        tap(recentlyLoggedOut => {
          if(!recentlyLoggedOut) {
            this.homeRoutingService.goHome();
          }
        }),
      );
  }
}