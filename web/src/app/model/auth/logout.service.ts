import { Injectable } from '@angular/core';
import { ILogout, hasSucceeded } from '@memmy/model';
import { logoutSuccessful } from '../state/action/logout';
import { HomeRoutingService } from '../../home/home-routing.service';
import { AsHttpRequest } from '../http-request/as-http-request';
import { responseOf } from '../../core/response-of';
import dispatch from '../state/core/dispatch';
import serverRouter from '../server-router/server-router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private homeRouter: HomeRoutingService) { }

  private tryLogout: AsHttpRequest<ILogout> = serverRouter.logout;

  private logoutSucceeded = () => {
    dispatch(logoutSuccessful);
    this.homeRouter.goToLoggedOut();
  }

  logout = token =>
    responseOf(this.tryLogout(token))
      .then(result => {
        if(hasSucceeded) {
          this.logoutSucceeded();
        }
      });
    
}
