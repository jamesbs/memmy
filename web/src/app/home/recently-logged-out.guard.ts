import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { HomeRoutingService } from './home-routing.service';
import { tap } from 'rxjs/operators';
import recentlyLoggedOut from '../model/auth/recently-logged-out';

@Injectable({
  providedIn: 'root',
})
export class RecentlyLoggedOutGuard implements CanActivate {
  constructor(private homeRoutingService: HomeRoutingService) { }

  canActivate() {
    return recentlyLoggedOut
      .pipe(
        tap(recentlyLoggedOut => {
          if(!recentlyLoggedOut) {
            this.homeRoutingService.goHome();
          }
        }),
      );
  }
}